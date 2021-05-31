var express = require('express');
var collector = express.Router();

/* Ejemplos Get. */
collector.get('/get/params/:nombre', function(req, res, next) {
    res.send("¡Usuario "+req.params.nombre+ "! Inicio de ejemplo Get con Params");
});

collector.get('/get/query', function(req, res, next) {
    if(typeof req.query.nombre !== 'undefined'){
        res.send("¡Usuario "+req.query.nombre+ "! Inicio de ejemplo Get con Query");
    }else{
        res.send("!Usuario! no ha sido posible iniciar");
    }
});

collector.get('/get/params/opcional/:nombre?', function(req, res, next) {
    if(typeof req.params.nombre !== 'undefined'){
        res.send("¡Hola Usuario "+req.params.nombre+ "! Inicio de ejemplo Get con Opcional");
    }else{
        res.send("!Hola Usuario! no ha sido posible iniciar ");
    }
});

//Ejemplos con Post
collector.post('/post', function(req, res, next) {
    if(typeof req.body.nombre !== 'undefined'){
        res.send("¡Hola Usuario "+req.body.nombre+ "! Inicio de ejemplo de POST");
    }else{
        res.send("!Hola Usuario! no ha sido posible iniciar ");
    }
});

//Ejemplos de Middleware
collector.get('/get/middleware/:variable1/:variable2', 
    function(req, res, next) {
        res.write("<p>El resultado de la suma es: "+(parseInt(req.params.variable1)+parseInt(req.params.variable2))+"</p>")
        next();
    },
    function(req, res, next) {
        res.write("<p>El resultado de la resta es: "+(req.params.variable1-req.params.variable2)+"</p>")
        next();
    },
    function(req, res, next) {
        res.write("<p>El resultado de la multiplicacion es: "+(req.params.variable1*req.params.variable2)+"</p>")
        next();
    },
    function(req, res, next) {
        res.write("<p>El resultado de la division es: "+(req.params.variable1/req.params.variable2)+"</p>")
        res.end();
    },
);

//Ejemplo Create Servidor

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Servidor de Salvador test\n');
}).listen(3000, "127.0.0.1");
console.log('Servidor ejecutandose en: http://127.0.0.1:3000/');


module.exports = collector;
