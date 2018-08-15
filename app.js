const express = require("express");
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>I love Treehouse :D</h1>')
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello, Javascript Developer!</h1>')
});

app.listen(port, () => {
    console.log(`The Application is running on localhost ${port}`)
});