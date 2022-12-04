// var con = require('../database.js');
// const express = require('express');
// var router = express.Router();
// const bodyParser = require('body-parser');
// router.use(bodyParser.json());


// router.post('/storeData',async(req, res) => {
    
//   console.log("hello");
//     let firstname= req.body.firstName;
//     let lastname=req.body.lastName;
//     let email=req.body.email;
//     let mobile=req.body.mobile;
//     let position=req.body.position;
//     let age=req.body.age;
//     let address=req.body.address;
//     let city=req.body.city;
//     let state=req.body.state;
//     let zipcode=req.body.zipcode;

//     // console.log(fname,sname,email);
    
//     let data= {firstname,lastname,email,mobile,position,age,address,city,state,zipcode};
//     // let sql = "INSERT INTO users values('"+fname+"','"+sname+"','"+email+"')";
//     let sql = "INSERT INTO users SET ?";
    
//     let query =con.query(sql, data,(err, results) => {
        
//       if(err){
//         console.log("hello");
//         res.send(JSON.stringify({"status": 204, "error": null}));
//         return;
//       }
//       res.send(JSON.stringify({"status": 200, "error": null}));
//     });
//   });

  
//   module.exports = router;