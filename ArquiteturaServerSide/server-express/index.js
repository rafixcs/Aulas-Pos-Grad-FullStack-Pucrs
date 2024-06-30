const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.get('/rota', (req, res) => {
    console.log(req.query)
    let numeroRota = req.query.numeroRota;
    res.send(`Rota numero: ${numeroRota}`);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})