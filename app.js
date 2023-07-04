

const express = require('express')
const hbs = require('hbs');
require('dotenv').config();


const app = express()
const port = process.env.PORT;
const arg = {
  nombre : 'Juan Rosales',
  titulo : 'Curso de Node'
};

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
// Servir contenido estático
app.use( express.static('public') );


app.get('/', (req, res) => {
  res.render('home', arg);

});
app.get('/elements', (req, res) => {
    res.render('elements', arg);
});
app.get('/generic', (req, res) => {
    res.render('generic', arg);
});
app.get('*', (req, res) => {
    res.render('404', arg);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })