const express = require('express');
const router = express.Router();
const Task = require('../model/task');
const provedor = require('../model/provedor');
const usuarios = require('../model/usuarios');
const materiales = require('../model/materiales');
const departamentos = require('../model/departamentos');
const operaciones = require('../model/operaciones');
const productos = require('../model/productos');
const defectos = require('../model/defectos');
const modelos = require('../model/modelos');
const piezas = require('../model/piezas');
const defectoOperaciones = require('../model/defectoOperaciones');
const inspeccion_de_rec = require('../model/inspeccion_de_rec');
const piezaModelos = require('../model/piezaModelos');
const altaPNC = require('../model/AltaPnc');
const bajaPNC = require('../model/BajaPnc');
const inspeccionProceso = require('../model/inspeccionProceso');



const { Mongoose } = require('mongoose');

// Nos regresaria las tareas guardadas en la BD
router.get('/', (req, res) => {
    res.render('singin');
});
router.get('/inicio/', (req, res) => {
    res.render('Inicio');
});
router.get('/recepcion/', async(req, res) => {;
    const prov = await provedor.find();
    const mat = await materiales.find();
    res.render('Recepcion', { prov, mat });
});

router.get('/index/', async(req, res) => {
    const tasks = await Task.find();
    res.render('index', { tasks });
});

router.get('/agregarProveedor/', async(req, res) => {;
    const tasks = await provedor.find();
    res.render('AgregarProveedors', { tasks });
});

router.get('/agregarDefecto/', async(req, res) => {;
    const tasks = await defectos.find();
    res.render('AgregarDefecto', { tasks });
});

router.get('/agregarMaterial/', async(req, res) => {;
    const tasks = await materiales.find();
    res.render('AgregarMaterial', { tasks });
});

router.get('/agregarModelo/', async(req, res) => {;
    const tasks = await modelos.find();
    res.render('AgregarModelo', { tasks });
});

router.get('/agregarPieza/', async(req, res) => {;
    const tasks = await piezas.find();
    res.render('AgregarPieza', { tasks });
});



router.get('/agregarDefectoOperacion/', async(req, res) => {;
    const tasks = await defectoOperaciones.find();
    const mod = await operaciones.find();
    const def = await defectos.find();
    res.render('AgregarDefectoOperacion', { tasks, mod, def });
});

router.get('/agregarPiezaModelo/', async(req, res) => {;
    const tasks = await piezaModelos.find();
    const mod = await modelos.find();
    const def = await piezas.find();
    res.render('AgregarPiezaModelo', { tasks, mod, def });
});


router.get('/defectosProceso/', async(req, res) => {
    const dep = await departamentos.find();
    const ope = await operaciones.find();
    const prod = await productos.find();
    const def = await defectos.find();
    res.render('DefectosEnProceso', { dep, ope, prod, def });
});

router.get('/inspeccionFinal/', async(req, res) => {
    const prod = await productos.find();
    res.render('InspeccionFinal', { prod });
});

router.get('/inspeccionProceso/', async(req, res) => {
    const ins = await inspeccionProceso.find();
    res.render('InspeccionProceso', { ins });
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
router.get('/altaPNC/', async(req, res) => {
    const mod = await modelos.find();
    const def = await defectos.find();
    const oper = await operaciones.find();
    const defOp = await defectoOperaciones.find();


    res.render('AltaPNC', { mod, def, oper, defOp });
});
router.get('/ajustes/', (req, res) => {
    res.render('Ajustes');
});

router.get('/bajaPNC/', async(req, res) => {
    const altpnc = await altaPNC.find();
    res.render('BajaPNC', { altpnc });
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
    const task = new provedor(req.body);
    await task.save();
    res.redirect('/agregarProveedor/');
});

router.post('/addDefecto', async(req, res) => {
    const defecto = new defectos(req.body);
    await defecto.save();
    res.redirect('/agregarDefecto/');
});

router.post('/addMaterial', async(req, res) => {
    const defecto = new materiales(req.body);
    await defecto.save();
    res.redirect('/agregarMaterial/');
});

router.post('/addModelo', async(req, res) => {
    const defecto = new modelos(req.body);
    await defecto.save();
    res.redirect('/agregarModelo/');
});

router.post('/addPieza', async(req, res) => {
    const defecto = new piezas(req.body);
    await defecto.save();
    res.redirect('/agregarPieza/');
});

router.post('/addDefectoOperacion', async(req, res) => {
    const defecto = new defectoOperaciones(req.body);
    await defecto.save();
    res.redirect('/agregarDefectoOperacion/');
});

router.post('/addRecepcion', async(req, res) => {
    const defecto = new inspeccion_de_rec(req.body);
    await defecto.save();
    res.redirect('/inicio/');
});

router.post('/addAltaPnc', async(req, res) => {
    const defecto = new altaPNC(req.body);
    await defecto.save();
    res.redirect('/inicio/');
});

router.post('/addInspeccionProceso/:id', async(req, res) => {
    const defecto = new inspeccionProceso(req.body);
    var id = req.params.id;
    await defecto.save();
    var st = "/escuadradora/" + id;
    res.redirect(st);
});

router.post('/addBajaPnc/:id', async(req, res) => {
    const defecto = new bajaPNC(req.body);
    var id = req.params.id;
    await altaPNC.remove({ folio: id });
    await defecto.save();
    res.redirect('/inicio/');
});


router.post('/addPiezaModelo', async(req, res) => {
    const defecto = new piezaModelos(req.body);
    await defecto.save();
    res.redirect('/agregarPiezaModelo/');
});
// Ruta para editar los datos

router.get('/edit/:id', async(req, res) => {
    const task = await Task.findById(req.params.id);
    res.render('Ajustes', { task });
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
    await provedor.remove({ _id: id });
    res.redirect('/agregarProveedor/');
})

router.get('/deleteDefecto/:id', async(req, res) => {
    var id = req.params.id;
    await defectos.remove({ _id: id });
    res.redirect('/agregarDefecto/');
})

router.get('/deleteMaterial/:id', async(req, res) => {
    var id = req.params.id;
    await materiales.remove({ _id: id });
    res.redirect('/agregarMaterial/');
})

router.get('/deleteModelo/:id', async(req, res) => {
    var id = req.params.id;
    await modelos.remove({ _id: id });
    res.redirect('/agregarModelo/');
})

router.get('/deletePieza/:id', async(req, res) => {
    var id = req.params.id;
    await piezas.remove({ _id: id });
    res.redirect('/agregarPieza/');
})

router.get('/deleteDefectoOperacion/:id', async(req, res) => {
    var id = req.params.id;
    await defectoOperaciones.remove({ _id: id });
    res.redirect('/agregarDefectoOperacion/');
})

router.get('/deletePiezaModelo/:id', async(req, res) => {
    var id = req.params.id;
    await piezaModelos.remove({ _id: id });
    res.redirect('/agregarPiezaModelo/');
})

router.get('/deleteAltaPnc/:id', async(req, res) => {
    var id = req.params.id;
    await altaPNC.remove({ folio: id });
    res.redirect('/addBajaPnc');
})


router.get('/enviarvariable/:id', async(req, res) => {
        var id = req.params.id;
        const mod = await modelos.find();
        const def = await defectos.find();
        const oper = await operaciones.find();
        const acabados = await defectoOperaciones.find({ operacion: id });
        res.render('AltaPNC copy', { acabados, mod, def, oper });
    })
    /*
    router.get('/enviarvariable', async(req, res) => {
        var id2 = req.header.
        var id = req.params.id;
        const mod = await modelos.find();
        const def = await defectos.find();
        const oper = await operaciones.find();
        const acabados = await defectoOperaciones.find({ operacion: id });
        res.render('AltaPNC copy', { acabados, mod, def, oper });
    })
    */
router.get('/enviarFolio/:id', async(req, res) => {
    var id = req.params.id;
    const altpnc2 = await altaPNC.find({ folio: id });
    const altpnc = await altaPNC.find();

    res.render('BajaPNC copy', { altpnc2, altpnc });
})


module.exports = router;