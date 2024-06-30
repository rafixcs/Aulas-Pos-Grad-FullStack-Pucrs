var express = require('express');
var router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'postcardsDB';
const collectionName = 'postcards';

/* GET home page. */
router.get('/', async function(req, res, next) {
  const client = new MongoClient(url);
  try{
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const postcards = await collection.find().toArray();
      res.render('index', { postcards });
  } catch(erro) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add new postcard.'});
  } finally {
      await client.close;
  }
});

module.exports = router;
