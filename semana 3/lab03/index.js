var express = require('express')
var app = express()
app.use('/static',express.static('public'));

app.get('/',function (req,res){
    res.send('Hola mundo! en Express :v')
})

app.post('/',function (req,res){
    res.send('Llamada POST mims url')
})

app.put('/',function (req,res){
    res.send('Llamada PUT mims url')
})

app.delete('/',function (req,res){
    res.send('Llamada DELETE mims url')
})

app.use(function (req, res, next){
    res.status(404).send("Eso no existe!")
})
app.use(function (err, req, res, next) {
    conseole.error(err.stack)
    res.status(500).send('Algo salio mal!')
})
app.listen(3000, function () {
    console.log('Aplicacion de ejemplo escuchando en el puerto 300');
});