/************
 * DATABASE *
 ************/

 var db = require('../models');

 // GET /api/pokemons
function index(req, res) {
   db.Pokemon.find({}, function(err, allPokemons) {
     res.json(allPokemons);
   });
 }


// export public methods
 module.exports = {
   index: index
 };
