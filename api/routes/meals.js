const express = require('express')
const Meals = require('../models/Meals')

const router = express.Router()

//Obtener un listado
router.get('/', (req, res) => {
    Meals.find()
        .exec()
        .then(x => res.status(200).send(x))
})

//Obtener un solo elemento
router.get('/:id', (req, res) => {
    Meals.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

//Crear un nuevo elemento
router.post('/', (req, res) => {
    Meals.create(req.body).then(x => res.status(201).send(x))
})

//Actualizar un elemento
router.put('/:id', (req, res) => {
    Meals.findOneAndUpdate(req.params.id, req.body)
        .then(() => res.sendStatus(204))
})

//Ruta para eliminar un elemento
router.delete('/:id', (req, res) => {
    Meals.findOneAndDelete(req.params.id).exec().then(() => sendStatus(204))
})

module.exports = router
