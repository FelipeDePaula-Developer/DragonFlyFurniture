const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
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

//Template Engine
server.engine("handlebars", handlebars({ defaultLayout: "main" }))
server.set('view engine', 'handlebars')
server.use("/source", express.static("source"))
server.use("/css", express.static("css"))

//Rotas e Templates

server.get("/", (req, res) => {
    res.render("index")
})


/*C.R.U.D*/

server.get('/usuarios/consulta', (req, res) => {

})

server.get("/cadastro", (req, res) => {
    res.render('cadastro')
})

server.post('/regComplete', urlencodeParser, (req, res) => {
    sql.query("insert into user values (?,?,?)", [req.body.id, req.body.name, req.body.age])
    res.render('regComplete')
})

server.put('/usuarios/consulta/:index', (req, res) => {

})

server.delete('/usuarios/excluir/:index', (req, res) => {

})

server.listen(3030)

