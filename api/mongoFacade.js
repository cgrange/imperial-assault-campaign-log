const {collectionDAO, dbDAO} = require('./mongoDAO');
const {campaignLogSchema} = require('./jsonSchema');

// attempts to create a collection in the specified db with the given name.
// will create the collection with the campaign log schema as a validator
// if successful returns a success message. else will throw an error
async function createCampaignLogCollection(dbName, collectionName) {
    await dbDAO(dbName, async (db) => {
        return await db.createCollection(collectionName, {
            validator: {
                $jsonSchema: campaignLogSchema
            }
        });
    });
    return "campaign log collection created succesfully!";
}

// async function updateDocument(dbName, collectionName, query, document) {
//     collectionDAO(dbName, collectionName, async (collection) => {
//         await collection.update(
//             query,
//             document
//         );
//     });
// }

// async function insertDocument(dbName, collectionName, document) {
//     collectionDAO(dbName, collectionName, async (collection) => {
//         result = await collection.insertOne(document)
//         if (result.result.ok === 1) {
//             if (result.result.n === 1) {
//                 resolve();
//             } else {
//                 throw new Error("mongo says " + result.result.n + " documents were inserted?")
//             }
//         } else {
//             throw new Error("didn't get the OK from mongo on the insertion");
//         }
//     });
// }

// exports.insertDocument = insertDocument;
// exports.updateDocument = updateDocument;
exports.createCampaignLogCollection = createCampaignLogCollection;

