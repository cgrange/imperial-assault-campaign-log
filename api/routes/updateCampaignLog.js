const express = require('express');
const router = express.Router();
const MongoFacade = require('../mongoFacade');
const {dbName, collectionName} = require('../config');

router.post('/', (req, res, next) => {
    const document = req.body;
    (async () => {
        await MongoFacade.updateDocument(
            dbName,
            collectionName,
            {"squadName": document.squadName},
            document
        ).catch(err => {
            res.send(err);
        });
        res.send('OK');
    })();
});

module.exports = router;
