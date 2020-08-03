const express = require('express');
const router = express.Router();
const Task = require('../model/task');
const provedor = require('../model/provedor')
const usuarios = require('../model/usuarios');
const { Mongoose } = require('mongoose');

// Nos regresaria las tareas guardadas en la BD
router.get('/', (req, res) => {
    res.render('singin');
});
router.get('/inicio/', (req, res) => {
    res.render('Inicio');
});
router.get('/recepcion/', (req, res) => {;
    res.render('Recepcion', { provedor });
});

router.get('/defectosProceso/', (req, res) => {
    res.render('DefectosEnProceso');
});

router.get('/inspeccionFinal/', (req, res) => {
    res.render('InspeccionFinal');
});

router.get('/inspeccionProceso/', (req, res) => {
    res.render('InspeccionProceso');
});

router.get('/escuadradora/', (req, res) => {
    res.render('Escuadradora');
});
router.get('/enchapadora/', (req, res) => {
    res.render('Enchapadora');
});
router.get('/taladro/', (req, res) => {
    res.render('Taladro');
});
router.get('/sacabocados/', (req, res) => {
    res.render('Sacabocados');
});
router.get('/armado1/', (req, res) => {
    res.render('Armado1');
});
router.get('/armado2/', (req, res) => {
    res.render('Armado2');
});
router.get('/armado3/', (req, res) => {
    res.render('Armado3');
});
router.get('/acabados/', (req, res) => {
    res.render('Acabados');
});
router.get('/altaPNC/', (req, res) => {
    res.render('AltaPNC');
});

router.get('/bajaPNC/', (req, res) => {
    res.render('BajaPNC');
});

//Ruta para registrar
router.post('/registrar', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    var newuser = new usuarios();

    newuser.username = username;
    newuser.password = password;

    newuser.save(function(err, savedUser) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        return res.status(200).send();
    })
});


//Ruta para validar usuarios
router.post('/singin', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    usuarios.findOne({ username: username, password: password }, function(err, user) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }

        if (!user) {
            return res.status(404).send("<script>  window.alert('Usuario Invalido') </script>");


        }

        return res.redirect('/inicio/');
    })
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