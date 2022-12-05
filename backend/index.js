const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors");
var router = express.Router()
const app = express();
// var con = require('./database.js')
 
app.use(cors());
app.use(bodyParser.json());
// var users = require('./routes/auth');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "varun",
  database:"employee"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
  });


  app.post('/storeData',(req, res) => {
    let firstname= req.body.firstName;
    let lastname=req.body.lastName;
    let email=req.body.email;
    let mobile=req.body.mobile;
    let position=req.body.position;
    let age=req.body.age;
    let address=req.body.address;
    let city=req.body.city;
    let state=req.body.state;
    let zipcode=req.body.zipcode;

    // console.log(fname,sname,email);
    
    let data= {firstname,lastname,email,mobile,position,age,address,city,state,zipcode};
    // let sql = "INSERT INTO users values('"+fname+"','"+sname+"','"+email+"')";
    let sql = "INSERT INTO users SET ?";
    let query = con.query(sql, data,(err, results) => {
      if(err){
        res.send(JSON.stringify({"status": 204, "error": null, "response": results}));
      }
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

  app.post('/updateData',(req, res) => {
    let firstname= req.body.firstName;
    let lastname=req.body.lastName;
    let email=req.body.email;
    let mobile=req.body.mobile;
    let position=req.body.position;
    let age=req.body.age;
    let address=req.body.address;
    let city=req.body.city;
    let state=req.body.state;
    let zipcode=req.body.zipcode;
    let id=req.body.id;
    
    let query = con.query("UPDATE users SET FIRSTNAME = ?, LASTNAME = ?, EMAIL = ?, MOBILE = ?, POSITION = ?, AGE = ?, ADDRESS = ?, CITY = ?, STATE = ?, ZIPCODE = ?  WHERE ID = ?", [firstname,lastname,email,mobile,position,age,address,city,state,zipcode,id],(err, results) => {
      if(err){
        res.send(JSON.stringify({"status": 204, "error": null, "response": results}));
      }
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

  app.get('/showData',(req, res) => {
    let sql = "SELECT * FROM USERS";
    let query = con.query(sql, (err, results) => {
      if(err){
        res.send(JSON.stringify());
      }
      // console.log(results);
      res.send(JSON.stringify(results));
    });
  });

  app.get('/showRowData',(req, res) => {
    let id=req.body.id;
    let query = con.query("SELECT * FROM USERS WHERE ID = ?",[id], (err, results) => {
      if(err){
        res.send(JSON.stringify());
      }
      // console.log(results);
      res.send(JSON.stringify(results));
    });
  });

const port = 5000


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.use('/api/storeData',users);



app.listen(port, () => {
  console.log(`timedata app running on port ${port}`)
})

// module.exports = router;