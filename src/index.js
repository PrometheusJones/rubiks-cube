const express = require('express');

const app = express();

app.all('/', (req, res) => {
    res.write('Hello World its working');
    res.end();
});

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));