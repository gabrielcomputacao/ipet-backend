
const cors = require("cors")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3005;

app.use('/', require('./server/route/petRoute'))
/* funcao de roteamento para que todas as
rotas construidas no petroute sejam usadas
aqui no server */


app.listen(port)