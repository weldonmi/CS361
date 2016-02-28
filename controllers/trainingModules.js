var express = require('express');
var router = express.Router();

var trainingModule = require('../models/trainingModule.js');
router.get('/', function(req, res) {
    trainingModule.getTrainingModulesListing(function(modules) {
        var context = {
            modules: modules,
            trainingActive: true
        };
        
        res.render('training-modules', context);
    });
});

module.exports = router;
