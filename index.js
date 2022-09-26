const express = require("express");
const PORT = 4000;
const app = express();
const users = require("./users.js");

app.use(express.json())

app.get('/', (req, res) => {
    console.log('A new request just hit the API!')
    res.send('Hello dear API client :)');
} )

app.post('/users', (req,res) => {
    users.push({ id: users.length + 1, ...req.body})
    res.send(users)
})

app.listen(PORT, () => console.log(`running on port ${PORT}`));
