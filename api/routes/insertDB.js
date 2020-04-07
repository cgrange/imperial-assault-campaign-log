const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

require('dotenv/config');

async function upsert(document) {
    const client = new MongoClient(process.env.MONGODB_CONNECTION, {useUnifiedTopology: true});
    try {
        await client.connect();
        console.log("DB connected!");
        const db = client.db("imperial-assault");
        const collection = db.collection("campaign-logs");
        await collection.update(
            {"missionLog.campaignName": document.missionLog.campaignName},
            document,
            {upsert: true}
        )
        const campaignLog = await collection.findOne();
        console.log(campaignLog);
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
        console.log("db connection closed");
    }
}

router.post('/', (req, res, next) => {
    upsert(req.body);
    res.send('OK');
});

module.exports = router;

