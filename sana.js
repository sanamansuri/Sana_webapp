var mysql = require('mysql');

var con = mysql.createConnection({'host':'localhost','user':'root','password':'',database : "sanaa",port:3307});

con.connect(function(err) {
    if (err) {
        console.log(err.message);
        console.log("Error connecting to DB");
        return;
    }
    console.log("Connected!");
    con.query("CREATE TABLE test ( username VARCHAR(255), phoneno VARCHAR(255), emailid varchar(20), gender varchar(20))", function(err) {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log("Table created");
    });
});
