const mongoDAO = require('./mongoDAO');
const {campaignLogSchema} = require('./jsonSchema');

// query object example: {"missionLog.campaignName": document.missionLog.campaignName}
export function updateDocument(dbName, collectionName, query, document) {
    collectionDAO(dbName, collectionName, (collection) => {
        await collection.update(
            query,
            document
        );
    });
}

export function createCampaignLogCollection(dbName, collectionName) {
    dbDAO(dbName, (db) => {
        db.createCollection(collectionName, {
            validator: {
                $jsonSchema: campaignLogSchema
            }
        })
    });
}