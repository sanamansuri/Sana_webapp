const { connect } = require('http2');
var mysql=require('mysql');
var con=mysql.createConnection({'host':'localhost','user':'root','password':'',port:3307})


con.connect((err)=>{
   if(err)
console.log(err.message);
   else
console.log('connected');
  var s="create database sanaa";
  con.query(s,(err1)=>{
    if(err)
 console.log(err.message);
    else
 console.log('database created');
  });
});