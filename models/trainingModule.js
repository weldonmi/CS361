var mysql = require('mysql');
var pool = mysql.createPool({
	host 	:	'localhost',
	user 	:	'student',
	password:	'default',
	database:	'student'
});
// TODO: actually connect to database
function getTrainingModulesListing(callback) {
    // The reason this is a callback is because the database connection and stuff will
    // work using callbacks. This will cause a little less friction when we move to using
    // the database.
//<<<<<<< HEAD
    
        pool.query('SELECT moduleName, AddedDate FROM modules', function (err, rows, fields)         {
            if(err){
                next(err);
                return;
            }
              
            var result = [];
            for (var i = 0; i < rows.length; i++)
            {
                result.push({name : rows[i].moduleName, addedDate : rows[i].AddedDate});
            }
              
              console.log(rows);

//            getTrainingModule(function(){},1); used for testing
            
              callback(result);    
    
//            context.results = JSON.stringify(rows);
        })
;
}

function getTrainingModule(callback_individual,module_ID){

    pool.query('SELECT * FROM modules WHERE idModule = ?',[module_ID],  function(err,rows,fields)
    {
        console.log(rows);
            var result = {idModule : rows[0].idModule, name : rows[0].moduleName, ModuleDescription : rows[0].ModuleDescription, ModuleVideo : rows[0].ModuleVideo, AddedDate : rows[0].AddedDate};
            
        
        
        
/*            result.idModule = rows.idModule;
            result.name = rows.moduleName;
            result.ModuleDescription = rows.ModuleDescription;
            result.ModuleVideo = rows.ModuleVideo;
            result.AddedDate = rows.AddedDate;
*/
            console.log(result);//used to ensure results are correctly output
        
            callback_individual(result);
    }               
               

)}

module.exports = {
    getTrainingModulesListing: getTrainingModulesListing
};
