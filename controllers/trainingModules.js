var express = require('express');
var router = express.Router();

var trainingModule = require('../models/trainingModule.js');
router.get('/', function(req, res) {
    trainingModule.getTrainingModulesListing(function(modules) {
        var context = {
            modules: modules,
            trainingActive: true
        };
        trainingModule.getTrainingModule(NULL,1);//inserted for testing individual call
        res.render('training-modules', context);
    });
});

module.exports = router;
