var express = require("express");

var cors = require('cors')

const app = express();

app.use(cors())
console.log("on")
app.get("/somma", function (req, res) {
	   res.send(JSON.stringify(req.query.a - -req.query.b));
     console.log("Somma: "+JSON.stringify(req.query.a - -req.query.b))
});
app.get("/sottrazzione", function (req, res) {
  res.send(JSON.stringify(req.query.a -req.query.b));
  console.log("Sottrazzione: "+JSON.stringify(req.query.a - req.query.b))
  
});
app.get("/divisione", function (req, res) {
  res.send(JSON.stringify(req.query.a /req.query.b));
  console.log("Divisione: "+JSON.stringify(req.query.a /req.query.b))
  
});
app.get("/moltiplicazione", function (req, res) {
  res.send(JSON.stringify(req.query.a * req.query.b));
  console.log("Moltiplicazione: "+JSON.stringify(req.query.a * req.query.b))
  
});
app.listen(3000);