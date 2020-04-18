  var db = require('../db.js');

save_user_information = (data) => new Promise((resolve, reject)=>{
  db.query('INSERT INTO payments SET ?', data, function(err, results, fields){
    if(err){
      reject('Please Update the Records');
    }
resolve('Successful');
});
})


// get_total_amount = (data) => new Promise((resolve, reject)=>{
//   db.query('select sum(amount) as total_amount from payments ', null, function(err, results, fields){
//     if(err){
//       reject('Could not get total amount');
//     }
// resolve(results);
// });
// })


module.exports = {save_user_information}
