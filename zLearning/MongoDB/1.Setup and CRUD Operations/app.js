//https://youtu.be/fbYExfeFsI0
//

const {MongoClient} = require('mongodb');
const uri = `mongodb+srv://root:root@db.hhzuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const listDatabases = async (client) =>{
    databaseList = await client.db().admin().listDatabases();
    console.log("Databases : ")
    databaseList.databases.forEach(db => console.log(` - ${db.name}`));
}

const createListing = async (client,newListing) => {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
    .insertOne(newListing);

    console.log(`New listing created with the following id: ${result.insertedId} `)

};

const createMultipleListings = async (client,newListing) => {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
    .insertMany(newListing);

    console.log(`${result.insertedCount} new listings created with the following id(s) : `);
    console.log(result.insertedIds);
};

const findOneListingByName = async (client, nameOfListing)=>{
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name:nameOfListing});

    if(result){
        console.log(`Found a listing in the collection with the name ${nameOfListing}`);
        console.log(result);
    }else{
        console.log(`No listings found with the name ${nameOfListing}`);
    }

};


//check documentaion for operators :- https://www.mongodb.com/docs/manual/reference/operator/
const findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews = 
async (client,{
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
}) => {
    const cursor = await client.db("sample_airbnb").collection("listingsAndReviews")
    .find({
        bedrooms: {$gte: minimumNumberOfBedrooms},
        bathrooms: {$gte: minimumNumberOfBathrooms},
    }).sort({last_review: -1})
      .limit(maximumNumberOfResults);

    const results = await cursor.toArray();

     // Print the results
     if (results.length > 0) {
        console.log(`Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`);
        results.forEach((result, i) => {
            const date = new Date(result.last_review).toDateString();

            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   bedrooms: ${result.bedrooms}`);
            console.log(`   bathrooms: ${result.bathrooms}`);
            console.log(`   most recent review date: ${date}`);
        });
    } else {
        console.log(`No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`);
    }
};

const updateListingByName = async (client,nameOfListing,updatedListing)=> {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({
        name: nameOfListing
    },
    {
        $set: updatedListing
    });

    console.log(`${result.matchedCount} document(s) matched the query criteria`);
    console.log(`${result.modifiedCount} documents were updated`);

};

const upsertListingByName = async (client,nameOfListing,updatedListing) =>{
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({
        name: nameOfListing
    },
    {
        $set: updatedListing
    },
    {
        upsert: true
    });

    console.log(`${result.matchedCount} document(s) matched the query criteria`);
    
    if(result.upsertedCount > 0){
        console.log(`One document was inserted with id ${result.upsertedId}`);
    } else {
        console.log(`${result.modifiedCount} document(s) was/were updated`);
    }

};

const updateAllListingsToHavePropertyType = async (client) => {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").updateMany({
        property_type: {$exists: false}
    },
    {
        $set : {property_type: "Unknown"}
    });

    console.log(`${result.matchedCount} document(s) matched the query criteria`);
    console.log(`${result.modifiedCount} document(s) was/were updated`);

};

const deleteListingByName = async (client,nameOfListing) => {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteOne({
        name: nameOfListing
    });

    console.log(`${result.deletedCount} document(s) was/were deleted`);

};

const deleteListingsScrapedBeforeDate = async (client,date) => {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteMany({
        last_scraped: {$lt: date} 
    });

    console.log(`${result.deletedCount} document(s) was/were deleted`);
};

const main = async () => {
    const client = new MongoClient(uri);

    try{
        await client.connect();
        // await  listDatabases(client);

        // await createListing(client,{
        //     name: "Lovely Loft",
        //     summary: "A charming loft in paris",
        //     bedrooms: 1,
        //     bathrooms: 1
        // });

        // await createMultipleListings(client,[{
        //     name: "Lovely Loft1",
        //     summary: "A charming loft in paris",
        //     bedrooms: 1,
        //     bathrooms: 1
        // },
        // {
        //     name: "Lovely Loft2",
        //     summary: "A charming loft in paris",
        //     bedrooms: 1,
        //     bathrooms: 1
        // },
        // {
        //     name: "Lovely Loft3",
        //     summary: "A charming loft in paris",
        //     bedrooms: 1,
        //     bathrooms: 1
        // },
        // {
        //     name: "Lovely Loft4",
        //     summary: "A charming loft in paris",
        //     bedrooms: 1,
        //     bathrooms: 1
        // }]);

        // await findOneListingByName(client,"Lovely Loft4");

        // await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client,{
        //     minimumNumberOfBedrooms: 4,
        //     minimumNumberOfBathrooms: 2,
        //     maximumNumberOfResults: 10
        // });

        // await updateListingByName(client,"Ribeira Charming Duplex",{bedrooms:6, beds:8});

        // await upsertListingByName(client,"Ribeira Charming Duplex",{
        //     name: "My House",
        //     bedrooms: 2,
        //     bathrooms: 1
        // });

        // await updateAllListingsToHavePropertyType(client);

        // await deleteListingByName(client,"Horto flat with small garden");

        await deleteListingsScrapedBeforeDate(client,new Date("2019-02-15"));

    } catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);