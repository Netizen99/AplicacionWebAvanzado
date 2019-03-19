/*(function(){

	var Sum1 = function(s1)´{
		var s1 = Sumar();
	}
	}
	var s2 = Sumar();

	s1.agregar(10);
	s1.agregar(20);

	s2.agregar(30);
	s2.agregar(5);

	console.log(s1.obtenerSumaActual());
	console.log(s2.obtenerSumaActual());
}());
*/
/*(function() {
	var album_favorito = function( coleccion ){
		if ( coleccion.length === 0) {
			return;
		}
		var mas_reproducido = coleccion[0].tocado,
			mas_indice = 0;
		for ( var i=0, len = coleccion.length; i < len; i++){
			if ( coleccion[i].tocado > mas_reproducido){
				mas_reproducido = coleccion[i].tocado;
				mas_indice = i;
			}
		}
		return { play: mas_reproducido, index: mas_indice};
	};
	var music =
	var fav = album_favorito( music );
	console.log( "Tu album favorito fue tocado " + fav.play + " veces ");
}());
*/
/*(function(){
	var mayor = function(o1, o2){
		if ( o1 > o2 ){
			console.log('o1 es mayor');
		} else {
			console.log('o2 es mayor');
	}};
	mayor(400, 200);
}());*/

/*var Persona = function(nombre, edad){
	return {
		nombre: nombre,
		ingresarEdad: function(e) { edad: e;},
		obtenerEdad: function() {return edad;}			
		};
};

var Programador = function(nombre, edad, especialidad){
	var e = Persona(nombre, edad);
	e.especialidad = especialidad;
	return e;
};

var aurora = new Persona("Aurora", 27);
var sergio = new Programador("Sergio", 29, "Javascript");

console.log(sergio.obtenerEdad());*/

/*function printing(){
	console.log(1);
	setTimeout(function() { console.log(2); },1000);
	setTimeout(function() { console.log(3); }, 0);
	console.log(4);
}
printing();	*/

/*var param_replacer = require('./lib/replace');
if (typeof exports !== 'undefined'){
	if (typeof module !== 'undefined' && module.exports){
		exports = module.exports = param_replacer;
	}
	exports.param_replacer = param_replacer;
} else {
	root.param_replacer = param_replacer;
}
*/
/*var param_replace = require('./lib/replace');
var objetivo = "%hello% %world%! -- %world% %hello%!";
var idioma = "es";
var reemplazos = {
	"en":{
		"hello": "Hello nigga",
		"world": "World"
	},
	"es": {
		"hello": "Hola",
		"world": "Mundo"
	}
};
var resultado = param_replace.replace(objetivo, reemplazos[idioma]);
console.log(resultado);*/

/*var _= require("underscore");

var lista =[1,2,3,4,5,6]; _.each(lista,function(item){
	console.log(item);
});
var employeesCollection = [
	{
		"id":1,
		"name":"Soni",
		"designation":"SE",
		"salary":25000
},
{
		"id":2,
		"name":"Rohit",
		"designation":"SSE",
		"salary":35000
},
{
		"id":3,
		"name":"Akanksha",
		"designation":"Manager",
		"salary":45000
},
{
		"id":4,
		"name":"Mohan",
		"designation":"Accountant",
		"salary":30000
},
{
		"id":5,
		"name":"Gita",
		"designation":"SSE",
		"salary":35000
}
];
var cargos = _.map(employeesCollection, function(employee){
	return {nombre: employee.name, cargo: employee.designation};
});
console.log(cargos);
console.log(_.pluck(employeesCollection,"name"));

var empleados_sse = _.chain(employeesCollection)
.filter(function (employee){
	return employee.designation === 'SSE';
})
.map(function (employee){
	return {name: employee.name, id: employee.id};
})
.value();

console.log(empleados_sse);*/