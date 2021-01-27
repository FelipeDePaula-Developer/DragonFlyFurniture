const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const server = express()
const urlencodeParser = bodyParser.urlencoded({ extended: false })

server.use(cors())
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

server.get('/usuarios/consulta', (req, res) => {

})

server.post('/usuarios/cadastro', urlencodeParser, (req, res) => {
    sql.query(`insert into cadUser(userEmail, userPassword, firstName, lastName, zipCode, street, streetNumber, city, state , userCPF, phoneNumber) values("${req.body.email}",  "${req.body.password}",  "${req.body.firstName}", "${req.body.lastName}", "${req.body.zipCode}", "${req.body.street}", "${req.body.streetNumber}", "${req.body.city}", "${req.body.state}", "${req.body.userCPF}", "${req.body.phoneNumber}")`)
})

server.put('/usuarios/consulta/:index', (req, res) => {

})

server.delete('/usuarios/excluir/:index', (req, res) => {

})


server.listen(3030)