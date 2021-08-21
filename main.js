var express = require('express');
const app = express();

app.get('/', function (req, res) {
   
    var sql = require("mysql");

    // config for your database
	var con = sql.createConnection({
		host: "remotemysql.com",
		user: "1BT0P36KhA",
		password: "Wwng1zQpuK",
		database: "1BT0P36KhA"
});;

    con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM anime_database", function (err, result, fields) {
    if (err) throw err;
	const json = new Buffer(result, "binary");
    console.log(json);
  });
}); 
});
            

var server = app.listen(5000, function () {
    console.log('Server is running..');
});