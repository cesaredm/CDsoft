const express = require('express')
const path = require('path');
const morgan = require('morgan');
const app = express();

//setting "variables globales del server"
app.set('port', 3000)
//le decimos al server donde estaran las vistas
app.set('views', path.join(__dirname + '/views'))
app.engine('html', require('ejs').renderFile);
//le decimos al server que usara el motor se plantillas ejs
app.set('view engine', 'ejs')


//midlewares funciones que se ejecutan antes de llegar a la rura requerida
//le indicamosn al server donde estan los archivos publicos
app.use(express.static(path.join(__dirname + '/public')));

//routes
app.use(require('./routes/index'))
app.use(morgan('dev'));

//static files
//app.use(path.join(__dirname + '/public/'));

//servidor escuchando
app.listen(3000, (req, res)=>{
    console.log("server", app.get('port'));
});