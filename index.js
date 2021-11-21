

const express = require('express') // chama o modulo express
const app = express()  // chama a função Express

const rotabase = require('./routes/rotabase')
const rotaEsp32 = require('./routes/esp32') // tras as informacoes do ESP32
const retornaUsuario = require('./routes/retornaUsuario') // tras as informacoes do ESP32
const servidorRodando = require('./routes/servidorRodando') // tras as informacoes do ESP32


app.get('/nomeUsuario',retornaUsuario) // chama a rota nome do usuario
app.get('/rotaBase' , rotabase)// e uma funcao, recebe dois parametros o 1 e a rota,  2 parametro funcao de callback
app.get('/retornausuario',retornaUsuario) // chama a rota nome do usuario
app.get('/rotaesp32' , rotaEsp32)// e uma funcao, recebe dois parametros o 1 e a rota,  2 parametro funcao de callback
app.get('/servidor' , servidorRodando)// e uma funcao, recebe dois parametros o 1 e a rota,  2 parametro funcao de callback



app.listen(3000) //escuta os valores que estao na porta 3000

