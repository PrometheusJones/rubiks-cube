const express = require('express');
const initHandlebars = require('./config/handlebars.js');
//require('./config/handlebars.js')(app);

const app = express();

initHandlebars(app);


app.all('/', (req, res) => {
    res.render('index', { layout: false })
});

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));