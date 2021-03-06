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
const escuadradora = require('../model/escuadradora');
const enchapadora = require('../model/enchapadora');
const taladro = require('../model/taladro');
const sacabocados = require('../model/sacabocados');
const armado1 = require('../model/armado1');
const armado2 = require('../model/armado2');
const armado3 = require('../model/armado3');
const acabados = require('../model/acabados');
const inspeccion = require('../model/inspeccion_final');
const bajaPNC = require('../model/BajaPnc');
const def_proceso = require('../model/defecto_proceso');
const inspeccionProceso = require('../model/inspeccionProceso');





const { Mongoose } = require('mongoose');
const { Router } = require('express');

// Nos regresaria las tareas guardadas en la BD
router.get('/', (req, res) => {

    res.render('singin');
});
router.get('/inicio/', (req, res) => {
    res.render('Inicio');
});

router.get('/super/', (req, res) => {
    res.render('Super');
});

router.get('/registrar/', (req, res) => {
    res.render('registrar');
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

router.get('/escuadradora/', async(req, res) => {
    const ins = await escuadradora.find();
    const defOp = await defectoOperaciones.find({ operacion: "Escuadradora" });
    const mod = await modelos.find();
    const pieza = await piezas.find();

    res.render('Escuadradora', { ins, defOp, mod, pieza });
});
router.get('/enchapadora/', async(req, res) => {
    const ins = await enchapadora.find();
    const defOp = await defectoOperaciones.find({ operacion: "Enchapadora" });
    const mod = await modelos.find();
    const pieza = await piezas.find();

    res.render('Enchapadora', { ins, defOp, mod, pieza });
});
router.get('/taladro/', async(req, res) => {
    const ins = await taladro.find();
    const defOp = await defectoOperaciones.find({ operacion: "Taladro" });
    const mod = await modelos.find();
    const pieza = await piezas.find();

    res.render('Taladro', { ins, defOp, mod, pieza });
});
router.get('/sacabocados/', async(req, res) => {
    const ins = await sacabocados.find();
    const defOp = await defectoOperaciones.find({ operacion: "Sacabocados" });
    const mod = await modelos.find();
    const pieza = await piezas.find();

    res.render('Sacabocados', { ins, defOp, mod, pieza });
});
router.get('/armado1/', async(req, res) => {
    const ins = await armado1.find();
    const defOp = await defectoOperaciones.find({ operacion: "Armado1" });
    const mod = await modelos.find();
    const pieza = await piezas.find();
    res.render('Armado1', { ins, defOp, mod, pieza });
});

router.get('/armado2/', async(req, res) => {
    const ins = await armado1.find();
    const defOp = await defectoOperaciones.find({ operacion: "Armado2" });
    const mod = await modelos.find();
    const pieza = await piezas.find();
    res.render('Armado2', { ins, defOp, mod, pieza });
});

router.get('/armado3/', async(req, res) => {
    const ins = await armado1.find();
    const defOp = await defectoOperaciones.find({ operacion: "Armado3" });
    const mod = await modelos.find();
    const pieza = await piezas.find();
    res.render('Armado3', { ins, defOp, mod, pieza });
});

router.get('/acabados/', async(req, res) => {
    const ins = await armado1.find();
    const defOp = await defectoOperaciones.find({ operacion: "Acabados" });
    const mod = await modelos.find();
    const pieza = await piezas.find();
    res.render('Acabados', { ins, defOp, mod, pieza });
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
    var type = req.body.type;
    var newuser = new usuarios();

    newuser.username = username;
    newuser.password = password;
    newuser.type = type;


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
    var type = req.body.type;

    usuarios.findOne({ username: username, password: password, type: type }, function(err, user) {
        if (err) {
            console.log(err);
            return res.status(500).send();
        }

        if (!user) {
            return res.status(404).send("<script>  window.alert('Usuario Invalido') </script>");
        }

        console.log(type)

        if (type == "SuperUsuario") {
            return res.redirect('/Super/');

        } else {
            return res.redirect('/inicio/')
        }
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

router.post('/addInspeccionProceso', async(req, res) => {
    const defecto = new inspeccionProceso(req.body);
    const escuad = new escuadradora(req.body);
    const enchap = new enchapadora(req.body);
    const tal = new taladro(req.body);
    const sac = new sacabocados(req.body);
    const ar1 = new armado1(req.body);
    const ar2 = new armado2(req.body);
    const ar3 = new armado3(req.body);
    const aca = new acabados(req.body);

    await defecto.save();
    await escuad.save();
    await enchap.save();
    await tal.save();
    await sac.save();
    await ar1.save();
    await ar2.save();
    await ar3.save();
    await aca.save();

    res.redirect('/escuadradora/');
});

router.post('/addBajaPnc/:id', async(req, res) => {
    const defecto = new bajaPNC(req.body);
    var id = req.params.id;
    await altaPNC.remove({ folio: id });
    await defecto.save();
    res.redirect('/inicio/');
});
router.post('/addFinal', async(req, res) => {
    const ins = new inspeccion(req.body);
    await ins.save();
    res.redirect('/inicio/');
});

router.post('/addEscuadradora/:id', async(req, res) => {
    var id = req.params.id
    await escuadradora.update({ folio: id }, req.body);
    res.redirect('/enchapadora/');
});

router.post('/addTaladro/:id', async(req, res) => {
    var id = req.params.id
    await taladro.update({ folio: id }, req.body);
    res.redirect('/sacabocados/');
});

router.post('/addSacabocados/:id', async(req, res) => {
    var id = req.params.id
    await sacabocados.update({ folio: id }, req.body);
    res.redirect('/armado1/');
});


router.post('/addEnchapadora/:id', async(req, res) => {
    var id = req.params.id
    await enchapadora.update({ folio: id }, req.body);
    res.redirect('/taladro/');
});

router.post('/addArmado1/:id', async(req, res) => {
    var id = req.params.id
    await armado1.update({ folio: id }, req.body);
    res.redirect('/armado2/');
});
router.post('/addArmado2/:id', async(req, res) => {
    var id = req.params.id
    await armado2.update({ folio: id }, req.body);
    res.redirect('/armado3/');
});

router.post('/addArmado3/:id', async(req, res) => {
    var id = req.params.id
    await armado3.update({ folio: id }, req.body);
    res.redirect('/acabados/');
});

router.post('/addAcabados/:id', async(req, res) => {
    var id = req.params.id
    await acabados.update({ folio: id }, req.body);
    res.redirect('/inicio/');
});


router.post('/addPiezaModelo', async(req, res) => {
    const defecto = new piezaModelos(req.body);
    await defecto.save();
    res.redirect('/agregarPiezaModelo/');
});

router.post('/insFinal/', async(req, res) => {
    const ins = new inspeccion(req.body);
    await ins.save();
    res.redirect('/inicio/');

});
router.post('/defProceso/', async(req, res) => {
    const def_p = new def_proceso(req.body);
    await def_p.save();
    res.redirect('/inicio/');

});
// Ruta para editar los datos

router.get('/edit/:id', async(req, res) => {
    const task = await Task.findById(req.params.id);
    res.render('Ajustes', { task });
});




// Ruta para actualizar los datos

router.post('/edit/:id', async(req, res) => {
    var id = req.params.id;
    await Task.update({ _id: id }, req.body);
    res.redirect('/');
});

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
});

router.get('/deleteDefecto/:id', async(req, res) => {
    var id = req.params.id;
    await defectos.remove({ _id: id });
    res.redirect('/agregarDefecto/');
});

router.get('/deleteMaterial/:id', async(req, res) => {
    var id = req.params.id;
    await materiales.remove({ _id: id });
    res.redirect('/agregarMaterial/');
});

router.get('/deleteModelo/:id', async(req, res) => {
    var id = req.params.id;
    await modelos.remove({ _id: id });
    res.redirect('/agregarModelo/');
});

router.get('/deletePieza/:id', async(req, res) => {
    var id = req.params.id;
    await piezas.remove({ _id: id });
    res.redirect('/agregarPieza/');
});

router.get('/deleteDefectoOperacion/:id', async(req, res) => {
    var id = req.params.id;
    await defectoOperaciones.remove({ _id: id });
    res.redirect('/agregarDefectoOperacion/');
});

router.get('/deletePiezaModelo/:id', async(req, res) => {
    var id = req.params.id;
    await piezaModelos.remove({ _id: id });
    res.redirect('/agregarPiezaModelo/');
});
router.get('/deleteAltaPnc/:id', async(req, res) => {
    var id = req.params.id;
    await altaPNC.remove({ folio: id });
    res.redirect('/addBajaPnc');
});


router.get('/enviarvariable/:id', async(req, res) => {
    var id = req.params.id;
    const mod = await modelos.find();
    const def = await defectos.find();
    const oper = await operaciones.find();
    const acabados = await defectoOperaciones.find({ operacion: id });
    res.render('AltaPNC copy', { acabados, mod, def, oper });
});
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
});


module.exports = router;