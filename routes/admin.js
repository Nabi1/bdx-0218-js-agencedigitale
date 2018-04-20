var express = require('express');
var router = express.Router();
const connection = require('../controllers/config');

let select = "SELECT * FROM bar; SELECT * FROM blog; SELECT * FROM collab; SELECT * FROM contact; SELECT * FROM missions";
/* GET administration page */
router.get('/', function(req, res, next) {

  connection.query(select, function(err, rows, fields) {
	  	if (err) {
	  		res.status(500).json({"status_code": 500,"status_message": "internal server error"});
	  	} else {
        let bar = rows[0];
        let blog = rows[1];
        let collab = rows[2];
        let contact = rows[3];
        let missions = rows[4];

        res.render('admin', { bodyClass:'admin', bar, blog, collab, contact, missions});
	  	}
    });
}); // fin de l'appel au getElementsByClassName('className')

// let insert = 'UPDATE bar SET ?;'
// router.post('/updateData', function(req, res, next) {
//   let input = JSON.parse(JSON.stringify(req.body));
//   let id = req.params.id;
//   let data = {
//     name : input.name,
//     numbers : input.numbers
//   };
//   console.log(data);
//   console.log(input);
//   console.log(id);
//
//   connection.query(insert,[data], function(err, result) {
//     if (err){
//       res.status(500).json({"status_code": 500,"status_message": "internal server error"});
//     } else {
//
//       res.send('OK');
//     }
//   })
// })


module.exports = router;
