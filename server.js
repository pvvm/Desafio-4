const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()
//const pages = require("./data")

server.use(express.urlencoded({extended: true}))
server.use('/static', express.static(__dirname + "/public"))
server.use(routes)
//server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function(){
    console.log("Server is running")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});