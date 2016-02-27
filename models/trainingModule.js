// TODO: actually connect to database
function getTrainingModulesListing(callback) {
    // The reason this is a callback is because the database connection and stuff will
    // work using callbacks. This will cause a little less friction when we move to using
    // the database.
    callback([{
        name: "How to be nice",
        addedDate: "12-24-2015"
    }, {
        name: "How to be helpful",
        addedDate: "12-26-2015"
    }]);
}

module.exports = {
    getTrainingModulesListing: getTrainingModulesListing
};
