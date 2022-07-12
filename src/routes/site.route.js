const express = require('express');
const siteController = require('../controllers/site.controller');
const siteRoute = express.Router();

siteRoute.get('/search', siteController.search);
siteRoute.get('/', siteController.home);

module.exports = siteRoute;