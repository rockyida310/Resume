const {MongoClient} = require('mongodb');
const stream = require('stream');
const uri = `mongodb+srv://root:root@db.hhzuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const monitorListingsUsingStreamAPI = async (client,timeInMs=60000,pipeline=[]) => {
    const collection = client.db("sample_airbnb").collection("listingsAndReviews");
    const changeStream = collection.watch(pipeline);
    changeStream.stream().pipe(
        new stream.Writable({
            objectMode: true,
            write: function (doc, _, cb){
                console.log(doc);
                cb();
            }
        })
    );

    await closeChangeStream(timeInMs,changeStream);
}

const monitorListingsUsingHasNext = async (client,timeInMs=60000,pipeline = []) => {
    const collection = client.db("sample_airbnb").collection("listingsAndReviews");
    const changeStream = collection.watch(pipeline);
    closeChangeStream(timeInMs,changeStream);

    try{
        while(await changeStream.hasNext()){
            console.log(await changeStream.next());
        }
    }catch(e){
        if(changeStream.closed){
            console.log("The change stream is closed. Will not wait on any more changes");
        }else{
            throw error;
        }
    }

   
};

const monitorListingsUsingEventEmitter = async (client,timeInMs=60000,pipeline = []) =>{
    const collection = client.db("sample_airbnb").collection("listingsAndReviews");
    //watch will return changed stream
    const changeStream = collection.watch(pipeline);
    changeStream.on('change', (next)=>{
        console.log(next);
    });

    await closeChangeStream(timeInMs,changeStream);
};

const closeChangeStream = (timeInMs = 60000 , changeStream) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Closing the change stream");
            changeStream.close();
            resolve();
        },timeInMs);
    });
};



const main = async () => {
    const client = new MongoClient(uri);

    try{
        await client.connect();

        const pipeline = [
            {
                '$match': {
                    'operationType' : 'insert',
                    'fullDocument.address.country' : 'Australia',
                    'fullDocument.address.market' : 'Sydney'
                }
            }
        ];

        //to capture all change pass an empty pipeline
        // await monitorListingsUsingEventEmitter(client,30000,pipeline);
        // await monitorListingsUsingHasNext(client,30000,pipeline);
        await monitorListingsUsingStreamAPI(client,30000,pipeline);
    } catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);