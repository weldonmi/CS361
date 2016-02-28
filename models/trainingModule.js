// TODO: actually connect to database
function getTrainingModulesListing(callback) {
    // The reason this is a callback is because the database connection and stuff will
    // work using callbacks. This will cause a little less friction when we move to using
    // the database.
    callback([{
        name: "How to write a resume",
        level: "Beginner",
        addedDate: "12-24-2015"
    }, {
        name: "How to ask the best questions",
        level: "Advanced",
        addedDate: "2-6-2014"
    }, {
        name: "Business Attire",
        level: "Beginner",
        addedDate: "12-26-2012"
    }, {
        name: "Goal setting and task-orientation",
        level: "Experienced",
        addedDate: "3-16-2015"
    }, {
        name: "Office Math Skills",
        level: "Mid-level",
        addedDate: "6-6-2015"
    }, {
        name: "Rights in the workplace",
        level: "Beginner",
        addedDate: "8-26-2011"
    }
    ]);
	
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
