let express = require('express');
let bodyParser = require('body-parser');
let fs = require('fs');
let path = require('path');
let app = express();
const PORT= 8080;

//Rutas
let productoRuta = require("./routes/productos")
let carritoRuta = require("./routes/carrito")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(productoRuta);
app.use(carritoRuta);


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})
