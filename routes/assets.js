var express = require("express");
var app = express();

assets = [
    app.use("/img", express.static(__dirname+"/../public/images")),
    app.use("/js", express.static(__dirname+"/../public/javascripts")),
    app.use("/css", express.static(__dirname+"/../public/stylesheets")),
],

module.exports = assets;
