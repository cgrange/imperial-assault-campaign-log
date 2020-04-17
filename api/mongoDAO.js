const { MongoClient } = require('mongodb');

require('dotenv/config');

const client = new MongoClient(process.env.MONGODB_CONNECTION, {useUnifiedTopology: true});

async function clientDAO(cb) {
    try {
        await client.connect();
        console.log("DB connected!");
        return await cb(client);
    } finally {
        await client.close();
        console.log("db connection closed");
    }
}

// exposes the named database in a callback
// waits for that callback to resolve, 
// then returns the result of that callback
async function dbDAO(dbName, cb) {
    return clientDAO(async (client) => {
        const db = await client.db(dbName);
        return await cb(db);
    })
}

async function collectionDAO(dbName, collectionName, cb) {
    return await dbDAO(dbName, async (db) => {
        const collection = await db.collection(collectionName);
        return await cb(collection);
    });
}

exports.clientDAO = clientDAO;
exports.dbDAO = dbDAO;
exports.collectionDAO = collectionDAO;