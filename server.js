const express = require('express');
const app = express();
const {save_user_information} = require('./models/server_db');
const path = require('path');
const publicPath = path.join(__dirname, './public');

const bodyParser = require('body-parser');
// To Get output on the browser
//////////////////////////////
// app.get('/', (req, res)=>{
//   res.send('hello there');
// })
/******************************/

/*To handle all the parsing*/
app.use(bodyParser.json());
app.use(express.static(publicPath));


/***************************/


app.post('/post_info', async (req, res)=>{

//Organization Information//
  var org = req.body.org;
  //PaySlip Section//
  var pmonth= req.body.pmonth;
  var pyear= req.body.pyear;
  // Employee  Information//
  var pdate= req.body.pdate;
  var empee_no= req.body.empee_no;
  var empee_name= req.body.empee_name;
  var pps_no= req.body.pps_no;
// Pay, Allowances and Deductions//
  var pagp = req.body.pagp;
  var cgp = req.body.cgp;
  var cagp = req.body.cagp;
  var patd = req.body.patd;
  var ctd = req.body.ctd;
  var catd = req.body.ctd;
  var patc = req.body.patc;
  var ctc = req.body.ctc;
  var catc = req.body.ctc;
  var paus = req.body.patd;
  var cus = req.body.ctd;
  var caus = req.body.ctd;
  var papr = req.body.patd;
  var cpr = req.body.ctd;
  var capr = req.body.ctd;
  var panp = req.body.panp;
  var cnp = req.body.cnp;
  var canp = req.body.cnp;
  var date = req.body.date;

if(empee_name==""){
  return_info = {};
  return_info.error = true;
  return_info.message = "Enter Employee Name";
  return res.send(console.log(return_info));
}

/* Replaced by later codes*/
// res.send({"amount": amount, "email" : email});
/*****************************/
var result = await save_user_information ({"org": org, "pmonth" : pmonth,"pyear": pyear, "pdate" : pdate,"empee_no": empee_no,
"empee_name" : empee_name,"pps_no": pps_no, "pagp" : pagp, "cgp" : cgp,  "cagp" : cagp,"patd" : patd,  "ctd" : ctd, "catd" : catd, "patc" : patc,
"ctc" : ctc, "catc" : catc, "paus" : paus,  "cus" : cus,   "caus" : caus, "papr" : papr,  "cpr" : cpr, "capr" : capr,"panp" : panp,"cnp" : cnp, "canp" : canp, "date" : date});
res.send(result);
});

// app.get('/get_total_amount', async (req,res)=>{
//   var result = await get_total_amount();
// res.send(result);
// });

app.listen(3000, ()=>{
console.log('server is running on 3000');
});
