const express = require('express');
const initHandlebars = require('./config/handlebars.js');
const path = require('path');
const routes = require('./routes.js');
const config = require('./config/config.json')[process.env.NODE_ENV];
const initDatabase = require('./config/database.js');

//require('./config/handlebars.js')(app);

const app = express();

initHandlebars(app);

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, './public')))
app.use(routes);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));
    })
    .catch(err => {
        console.log('Application init failed:', err);
    })