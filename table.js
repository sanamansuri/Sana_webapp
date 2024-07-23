var mysql = require('mysql');

var con = mysql.createConnection({'host':'localhost','user':'root','password':'',database : "sanaa", port:3307});
var data = "";

con.connect(function(err) {
    if (err) {
        console.log(err.message);
        console.log("Error connecting to DB");
        return;
    }
    console.log("Connected!");
    con.query("SELECT * FROM test", function(err, result) {
        if (err) {
            console.log("Error retrieving data");
            return;
        }
        console.log(result);
        data = result;
    });
});

var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    });
    res.write("<table border='1'>");
    res.write("<tr>");
    res.write("<th>username</th>");
    res.write("<th>phoneno</th>");
    res.write("<th>emailid</th>");
    res.write("<th>gender</th>");
    
    res.write("</tr>");
    for (var i = 0; i < data.length; i++) {
        res.write("<tr>");
        res.write("<td>" + data[i].username + "</td>");
        res.write("<td>" + data[i].phoneno + "</td>");
        res.write("<td>" + data[i].emailid + "</td>");
        res.write("<td>" + data[i].gender + "</td>");
     
        res.write("</tr>");
    }
    res.end("</table>");
}).listen(3007);
console.log("Server listening on port 3002");
