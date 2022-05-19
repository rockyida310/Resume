const {MongoClient} = require('mongodb');
const uri = `mongodb+srv://root:root@db.hhzuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const listDatabases = async (client) =>{
    databaseList = await client.db().admin().listDatabases();
    console.log("Databases : ")
    databaseList.databases.forEach(db => {
        console.log(` - ${db.name}`);
    });
}


const main = async () => {
    const client = new MongoClient(uri);

    try{
        await client.connect();
        await  listDatabases(client);
    } catch(e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);