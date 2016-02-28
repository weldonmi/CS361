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
	
	pool.query("DROP TABLE IF EXISTS xxxx", function(err){ //replace your connection pool with the your variable containing the connection pool
		var createString = "SELECT ModuleName, AddedDate, LinkToModulePage "+
		"FROM modules";
		pool.query(createString, function(err){
			context = JSON.stringify(rows);
			res.send(context);
		})
	});
	
}

module.exports = {
    getTrainingModulesListing: getTrainingModulesListing
};
