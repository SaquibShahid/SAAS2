const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
})

const modelsCache = {};

app.get('/user', async (req, res) => {
    const app = req.query.app;

    if (!modelsCache[app]) {
        model = require(`./${app}.db.js`);
        modelsCache[app] = model;
    }

    const users = await modelsCache[app].find({});
    return res.json({ value: users })
})

app.listen(5002, () => {
    console.log("Server listening on port 5002");
})