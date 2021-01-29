const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const server = express()

server.use(cors())
server.use(express.static("."))
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())


const sql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "9581@mysqlFRVS",
    port: 3306,
    socketPath: '/var/run/mysqld/mysqld.sock'
})

sql.query("use crud")

/*C.R.U.D*/

server.post('/usuarios/login', (req, res) => {
    sql.query(`select userEmail, userPassword from cadUser where userEmail = "${req.body.email}" and userPassword = "${req.body.password}"`, (err, result, fields) => {
        const queryResult = result[0]
        if(queryResult != undefined){
            res.send()
        }else{
            res.send()
        }
    })
})

server.post('/usuarios/cadastro', (req, res) => {
    sql.query(`insert into cadUser(
        userEmail, 
        userPassword, 
        firstName, 
        lastName, 
        zipCode, 
        street, 
        streetNumber, 
        city, 
        state, 
        userCPF, 
        phoneNumber) values(
        "${req.body.email}",  
        "${req.body.password}", 
        "${req.body.firstName}", 
        "${req.body.lastName}", 
        "${req.body.zipCode}", 
        "${req.body.street}", 
        "${req.body.streetNumber}", 
        "${req.body.city}", 
        "${req.body.state}", 
        "${req.body.userCPF}", 
        "${req.body.phoneNumber}")`)
})

server.listen(3030)