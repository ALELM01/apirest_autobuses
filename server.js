const express = require('express');
const app = express();
var path = __dirname + '/views/';
app.use("/src/public", express.static(__dirname + "/public"));
//importing routes
app.get("/", function (req, res) {
    console.log("hola");
    res.sendFile(path + "index.html");
});


app.get("/consorcio", function (req, res) {
    console.log("hola");
    res.sendFile(path + "consorcio.html");
});

app.get("/paradas", function (req, res) {
    console.log("hola");
    res.sendFile(path + "paradas.html");
});











    
//setings
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () =>{
    console.log('server on port 3000');

});