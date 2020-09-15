const express = require('express')
const Orders = require('../models/Orders')
const {isAuthenticated, hasRoles } = require('../auth')

const router = express.Router()

//Obtener un listado
router.get('/', (req, res) => {
    Orders.find()
        .exec()
        .then(x => res.status(200).send(x))
})

//Obtener un solo elemento
router.get('/:id', (req, res) => {
    Orders.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

//Crear un nuevo elemento
router.post('/', isAuthenticated, (req, res) => {
    const { _id } = req.user
    Orders.create({ ...req.body, user_id: _id }).then(x => res.status(201).send(x))
})

//Actualizar un elemento
router.put('/:id', isAuthenticated, hasRoles(['admin','user']), (req, res) => {
    Orders.findOneAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

//Ruta para eliminar un elemento
router.delete('/:id', isAuthenticated, (req, res) => {
    Orders.findOneAndDelete(req.params.id).exec().then(() => sendStatus(204))
})

module.exports = router
