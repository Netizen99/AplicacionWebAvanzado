// importamos los paquetes necesarios
const express = require('express'); //importamos express
const app = express(); //instanciamos una aplicacion
const bodyParser = require('body-parser');

// configuramos nuestra app para usar bodyParser()
// el cual nos permitira obtener data enviada por POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000; // configuramos nuestro puerto

// prettier-ignore
app.use("/", function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers','Content-Type, Authorization, Content-Length, x-Requested-With');
	next();
});
// prettier-ignore

app.options("/*", function(req, res, next) {
	res.sendStatus(200);
});

//RUTAS PARA NUESTRA API
// ======================================================================================================
const router = express.Router(); // obtenemos una isntancia del enrutador de express

//ruta de prueba para ver si todo funciona (accesible por GET http://localhost:5000/api)
router.get('/', function(req, res) {
	res.json({ message: 'genial! bienvenido a nuestra api!' });
});

const userRouter = require('./routes/user');
router.use('/user', userRouter);

// REGISTRAMOS NUESTRAS RUTAS ---------------------------------
// todas las rutas tendran el prefijo /api
app.use('/api', router);

// Nos conectamos a nuestra base de datos
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dawa_blog');
mongoose.Promise = global.Promise;

// INICIAMOS EL SERVIDOR
// =======================================================================================================
app.listen(port);
console.log('La magia sucede en el puerto ' + port);
