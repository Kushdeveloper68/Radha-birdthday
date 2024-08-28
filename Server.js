const express = require("express");
const ex = express();
const bodyParser = require("body-parser");
const path = require("path");
ex.use(bodyParser.urlencoded({ extended: true }));
ex.use(express.urlencoded({ extended: true }));
// Set up static files middleware
ex.use(express.static(path.join(__dirname, 'public')));
ex.set('view engine', 'ejs');
// Set the views directory
ex.set('views', path.join(__dirname, './'));
ex.get("/" , (req , res) => {
  res.render("Birthday");
});
ex.listen(8000, () => {console.log(" birthday server started")});