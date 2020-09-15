/*Paquetes importados*/
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
// Configuración de servidor local
/*Creando aplicación de express*/
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')
const app = express()
app.use(bodyParser.json())
app.use(cors())
/*Se usa para interpretar la Url*/
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

app.use('/api/meals', meals)
app.use('/api/orders', orders)
app.use('/api/auth', auth)

module.exports =app