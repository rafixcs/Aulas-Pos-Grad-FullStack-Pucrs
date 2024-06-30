var express = require("express");
var router = express.Router();
const { listAll, listOne, addPostcard, updatePostcard, deletePostcardById, addMongo,
        listAllMongo, listOneMongo } = require("../controllers/postcard")

const fs = require("fs");
const { v4: uuidv4 } = require('uuid');



// Rota GET para obter todos os Postcards
router.get('/', (req, res) => {
    listAll(res);
});

router.get('/mongo', (req, res) => {
  listAllMongo(res);
})

router.get('/:id', (req, res) => {
    const postId = req.params.id;
    listOne(postId, res);
});

router.get('/mongo/:id', (req, res) => {
  const id = req.params.id;
  listOneMongo(id, res);
})

router.post('/', (req, res) => {
    const { name, cidade, pais, descricao, imageUrl } = req.body;
    const newPostcard = {
        id: uuidv4(),
        name,
        cidade,
        pais,
        descricao,
        imageUrl,
    };

    addPostcard(newPostcard, res);
});

router.post('/mongo/', (req, res) => {
  const { name, cidade, pais, descricao, imageUrl } = req.body;
  const newPostcard = {
    name,
    cidade,
    pais,
    descricao,
    imageUrl,
  };

  addMongo(newPostcard, res);
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, cidade, pais, descricao, imageUrl } = req.body;
    const postcard = {
        name,
        cidade,
        pais,
        descricao,
        imageUrl,
    };
    console.log("TESTEE")

    updatePostcard(id, postcard, res);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    deletePostcardById(id, res);
});

module.exports = router;

