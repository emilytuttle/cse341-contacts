const express = require('express');
const routes = express.Router();

const usersController = require('../controllers/users');

routes.get('/', usersController.getAll);

routes.get('/:id', usersController.getSingle);

module.exports = routes ;