// npm run start
const express = require('express');
const DataBaseMock = require('./DataBaseMock');
const storage = require('node-sessionstorage')
 
const app = express();
DB = new DataBaseMock()

app.get('/', (req, res) => {

    res.send('Hello world')
    res.end()

})

app.get('/BoardGame', (req, res) => {

    res.send(JSON.stringify(DB.GetBoardGames()))
    res.end()

})

app.post('/BoardGame', (req, res) => {

    const { Email, Password } = req.body;
    
    /////////////////////////////////////////////////////////////////////////////
    // check if is correct, then save it
    storage.setItem('Email', Email)
    storage.setItem('Password', Password)
    
    res.send({
        Username,
        Password,
        NewBoardGame
        // authorization,
    });

})

app.post('/Login', (req, res) => {

    const { Username, Password } = req.body;
    // const { authorization } = req.headers;
    res.send({
        Username,
        Password,
        NewBoardGame
        // authorization,
    });

})

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`http://localhost:${PORT}`));