
const {MongoClient} = require('mongodb');
const uri = `mongodb+srv://root:root@db.hhzuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const printCheapestSuburbs = async (client,country,market,maxNumberToPrint) => {
    const pipeline = [{
        '$match': {
            'bedrooms': 1,
            'address.country': country,
            'address.market': market,
            'address.suburb': {
                '$exists': 1,
                '$ne': ''
            },
            'room_type': 'Entire home/apt'
        }
    }, {
        '$group': {
            '_id': '$address.suburb',
            'averagePrice': {
                '$avg': '$price'
            }
        }
    }, {
        '$sort': {
            'averagePrice': 1
        }
    }, {
        '$limit': maxNumberToPrint
    }];

    //executing above pipeline
    const aggCursor = client.db("sample_airbnb").collection("listingsAndReviews").aggregate(pipeline);

    await aggCursor.forEach(airbnbListing => {
        console.log(`${airbnbListing._id} : ${airbnbListing.averagePrice}`);
    });

};

const main = async () => {
    const client = new MongoClient(uri);

    try{
        await client.connect();
        
        await printCheapestSuburbs(client, "Australia", "Sydney", 10 );

    } catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);