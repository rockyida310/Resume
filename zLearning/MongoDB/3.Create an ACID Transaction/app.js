
const {MongoClient} = require('mongodb');
const uri = `mongodb+srv://root:root@db.hhzuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const createReservationDocument = (nameOfListing,reservationDates,reservationDetails) => {
    
    let reservation = {
        name: nameOfListing,
        dates: reservationDates
    }

    for(let detail in reservationDetails){
        reservation[detail] = reservationDetails[detail];
    }

    return reservation;
};

const createReservation = async (client,userEmail,nameOfListing,reservationDates,reservationDetails) => {
    const userCollection = client.db("sample_airbnb").collection("users");
    const listingsAndReviewsCollection = client.db("sample_airbnb").collection("listingsAndReviews");
    const reservation = createReservationDocument(nameOfListing,reservationDates,reservationDetails); 

    //every transaction and its operation must be associated with a session
    const session = client.startSession();
    
    const transactionOptions = {
        readPreference : 'primary',
        readConcern: { level : 'local'},
        writeConcern: {w : 'majority'}
    };

    try{
        const transactionResults = await session.withTransaction(async () => {
            const userUpdateResults = await userCollection.updateOne({
                email: userEmail},{ $addToSet : {reservations: reservation} },{session});
            
            console.log(`${userUpdateResults.matchedCount} document(s) found in the users collection
            with the email address ${userEmail} `);
            console.log(`${userUpdateResults.modifiedCount} document(s) was/were updated to include 
            the reservation`);

            const isListingReservedResults = await listingsAndReviewsCollection.findOne(
                {name: nameOfListing, datesReserved: {$in: reservationDates}},{session}
            );
            
            if(isListingReservedResults){
                await session.abortTransaction();
                console.error("This listing is already reserved for at least one of the given dates.The reservation could not be created");
                console.error("Any operations that already occured as part of this transaction will be rolled back.");
                return;
            }

            //everything is ok making resrvation
            const listingsAndReviewsUpdateResults = await listingsAndReviewsCollection.updateOne(
                {name: nameOfListing},
                {$addToSet: {datesReserved: {$each: reservationDates}} },
                {session}
            );

            console.log(`${listingsAndReviewsUpdateResults.matchedCount} document(s) found in the listingAndReviews collection with the name ${nameOfListing}.`);

            console.log(`${listingsAndReviewsUpdateResults.modifiedCount} document(s) was/were updated to include the reservation dates.`);

        } , transactionOptions);

        if(transactionResults){
            console.log("The reservation was successfully created");
        }else{
            console.log("The transaction was intentionally aborted");
        }

    }catch(e){
        console.log(`The Transaction was aborted due to an unexpected error: ${e} `);
    }finally{
        await session.endSession();
    }

};

const main = async () => {
    const client = new MongoClient(uri);

    try{
        await client.connect();
        
        // console.log(createReservationDocument("My House",[new Date("2021-12-31"),new Date(2022-01-01)],{
        //     pricePerNight: 180,
        //     specialRequests: "Late checkout",
        //     breakfastIncluded: true
        // }));

        await createReservation(client,
            "leslie@example.com",
            "My House",
            [new Date("2021-12-31"),new Date("2022-01-01")],
            {
                pricePerNight: 180,
                specialRequests: "late-checkout",
                breakfastIncluded: true 
            });

    } catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);