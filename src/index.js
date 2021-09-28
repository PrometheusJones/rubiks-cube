const express = require('express');
const initHandlebars = require('./config/handlebars.js');
const path = require('path');
const routes = require('./routes.js')
//require('./config/handlebars.js')(app);

const app = express();

initHandlebars(app);

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, './public')))
app.use(routes);

app.listen(5000, console.log.bind(console, 'Application is running on http://localhost:5000'));