const routes = require('express').Router();
const dataDisplay = require('../controllers/');

routes.get('/', dataDisplay.dataDisplay);
routes.use('/users', require('./users'));

module.exports = routes;