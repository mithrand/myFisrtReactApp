/**
 * Created by Antonio on 19/02/2017.
 */

//Cargamos express
var express = require("express");
var path = require("path");


const __subdir = "/public";

// ejecuctamos express y creamos una aplicacion
var server = express();
server.get("/", inicio);
server.use("/images",express.static(__dirname + "/images"));
server.use("/build",express.static(__dirname  + "/build"));
server.use("",express.static(__dirname + __subdir + ''));


function inicio(request,response)
{
    response.sendFile(path.join(__dirname + __subdir +"/index.html"));
}

server.listen(8080);