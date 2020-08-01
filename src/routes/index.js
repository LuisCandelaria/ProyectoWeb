const express = require('express');
const router = express.Router();
const Task = require('../model/task');

// Nos regresaria las tareas guardadas en la BD
router.get('/', (req, res) => {
    //   const tasks = await Task.find();
    res.render('Inicio');
});

router.get('/recepcion/', (req, res) => {
    //   const tasks = await Task.find();
    res.render('Recepcion');
});

// Ruta que nos permita agregar nuevas tareas que vienen desde un metodo post
router.post('/add', async(req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
});

// Ruta para editar los datos

router.get('/edit/:id', async(req, res) => {
    const task = await Task.findById(req.params.id);
    res.render('edit', { task });
})


// Ruta para actualizar los datos

router.post('/edit/:id', async(req, res) => {
    var id = req.params.id;
    await Task.update({ _id: id }, req.body);
    res.redirect('/');
})

// Esta ruta permita modificar el estatus de una tarea por medio de su propiedad status.
router.get('/turn/:id', async(req, res, next) => {
    let { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

// Ruta que nos permita eliminar tareas

router.get('/delete/:id', async(req, res) => {
    var id = req.params.id;
    await Task.remove({ _id: id });
    res.redirect('/');
})

module.exports = router;