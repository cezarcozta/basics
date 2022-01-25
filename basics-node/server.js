const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World do César monstrão');
});

app.listen(3001);

