// TODO: actually connect to database
function getTrainingModulesListing(callback) {
    // The reason this is a callback is because the database connection and stuff will
    // work using callbacks. This will cause a little less friction when we move to using
    // the database.
    
        pool.query('SELECT moduleName, AddedDate FROM modules', function (err, rows, fields)         {
            if(err){
                next(err);
                return;
            }
              
            var result = [];
            for (var i = 0; i < row.length; i++)
            {
                result.push({name : rows[i].moduleName, addedDate : rows[i].AddedDate});
            }
              
              console.log(rows);

              callback(result);    
    
//            context.results = JSON.stringify(rows);
        })
;

    
    
    
}

module.exports = {
    getTrainingModulesListing: getTrainingModulesListing
};
