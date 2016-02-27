var express = require('express');
var router = express.Router();

var trainingModule = require('../models/trainingModule.js');
router.get('/', function(req, res) {
    trainingModule.getTrainingModulesListing(function(viewModel) {
        res.render('training-modules', viewModel);
    });
});

module.exports = router;
