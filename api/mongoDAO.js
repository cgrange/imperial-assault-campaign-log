const { MongoClient } = require('mongodb');

require('dotenv/config');

const client = new MongoClient(process.env.MONGODB_CONNECTION, {useUnifiedTopology: true});

export function clientDAO(cb) {
    try {
        await client.connect();
        console.log("DB connected!");
        cb(client);
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
        console.log("db connection closed");
    }
}

export function dbDAO(dbName, cb) {
    clientDAO((client) => {
        const db = client.db(dbName);
        cb(db);
    })
}

export function collectionDAO(dbName, collectionName, cb) {
    dbDAO(dbName, (db) => {
        const collection = db.collection(collectionName);
        cb(collection);
    });
}
