const routes = require('express').Router();
const dataDisplay = require('../controllers/');

routes.use('/', require('./swagger'))

routes.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World');
})

routes.get('/', dataDisplay.dataDisplay);
routes.use('/users', require('./users'));

module.exports = routes;