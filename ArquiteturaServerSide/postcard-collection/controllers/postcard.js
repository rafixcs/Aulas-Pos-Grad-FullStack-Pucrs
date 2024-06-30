const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const { MongoClient, ObjectId } = require('mongodb');

const postcardsPath = "./postcards.json";

const url = 'mongodb://localhost:27017';
const dbName = 'postcardsDB';
const collectionName = 'postcards';

function listAll(res) {
    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read postcards data.' });
        }

        const postcards = JSON.parse(data);
        res.json(postcards);
    });
}

async function listAllMongo(res) {
    const client = new MongoClient(url);

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const postcards = await collection.find().toArray();
        res.status(201).json(postcards);
    } catch(erro) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add new postcard.'});
    } finally {
        await client.close;
    }
}

function listOne(postId, res) {
    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read postcards data.' });
        }

        const postcards = JSON.parse(data);
        const postcard = postcards.find((post) => post.id === postId);

        if (!postcard) {
            return res.status(404).json({ error: 'Postcard not found.' });
        }

        res.json(postcard);
    });
}

async function listOneMongo(id, res) {
    const client = new MongoClient(url);

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const postcards = await collection.find();
        res.status(201).json(postcards);
    } catch(erro) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add new postcard.'});
    } finally {
        await client.close;
    }
}

function addPostcard(newPostcard, res){
    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Failed to read postcards data.' });
        }
    
        const postcards = JSON.parse(data);
        postcards.push(newPostcard);
    
        fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to add new postcard.' });
          }
    
          res.status(201).json(newPostcard);
        });
      });
}

async function addMongo(newPostcard, res) {
    const client = new MongoClient(url);

    try{
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(newPostcard);
        newPostcard._id = result.insertedId;
        res.status(201).json(newPostcard);
    } catch(erro) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add new postcard.'});
    } finally {
        await client.close;
    }
}

function updatePostcard(id, updatePostcard, res) {
    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read postcards data.' });
        }

        const postcards = JSON.parse(data);
        const postcard = postcards.find((item) => item.id === id);

        if (!postcard) {
            return res.status(404).json({ error: 'Postcard not found.' });
        }

        postcard.name = updatePostcard.name;
        postcard.cidade = updatePostcard.cidade;
        postcard.pais = updatePostcard.pais;
        postcard.descricao = updatePostcard.descricao;
        postcard.imageUrl = updatePostcard.imageUrl;

        fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to update postcard.' });
            }

            res.json(postcard);
        });
    });
}

function deletePostcardById(id, res){
    fs.readFile(postcardsPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read postcards data.' });
        }

        let postcards = JSON.parse(data);
        const postcardIndex = postcards.findIndex((item) => item.id === id);

        if (postcardIndex === -1) {
            return res.status(404).json({ error: 'Postcard not found.' });
        }

        postcards = postcards.filter((item) => item.id !== id);

        fs.writeFile(postcardsPath, JSON.stringify(postcards, null, 2), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to delete postcard.' });
            }

            res.status(204).end();
        });
    });
}

module.exports = { listAll, listOne, addPostcard, updatePostcard, deletePostcardById,
                    addMongo, listAllMongo, listOneMongo }
//exports.listAll = listAll;