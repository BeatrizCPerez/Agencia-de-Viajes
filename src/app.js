const express = require("express");
const {engine} = require("express-handlebars");
const myconnection = require("express-myconecction");
const mysql = require("mysql");
const session = require("express-sessio");
const bodyParser = require("body-parser");


const app = express();
app.set("port", 4000);




app.listen(app.get("port"), () =>{
    console.log("listenin port ", app.get("port"))
})