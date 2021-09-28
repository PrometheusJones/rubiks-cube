const express = require('express');
const initHandlebars = require('./config/handlebars.js');
const path = require('path');
const routes = require('./routes.js');
const config = require('./config/config.json')[process.env.NODE_ENV]
//require('./config/handlebars.js')(app);

const app = express();

initHandlebars(app);

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, './public')))
app.use(routes);

app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));