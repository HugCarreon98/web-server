const express = require('express')
const app = express()
var hbs = require('hbs');
require("./hbs/helpers")

app.use(express.static( __dirname + "/public"))
// Express 
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

 
app.get('/', function (req, res) {
    /*let salida2 = {
        nombre: "Hugo",
        edad: 23,
        url: req.url
    }*/
 // res.send(`Hola Mundo!, mis datos son: ${JSON.stringify(salida2)}`)
  //res.json(salida2)
  res.render("index")
})


app.get('/home', function (req, res) {
  res.render("home")

})

 

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`)
})