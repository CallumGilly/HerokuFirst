var express = require('express');
var app = express();

app.get("/". function (req, res) {
  res.send('Hello There')
})
app.listen(3000, () => {
  console.log("Hello World");
})
