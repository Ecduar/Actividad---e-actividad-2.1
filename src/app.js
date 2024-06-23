const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const dotenv = require('dotenv');

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la aplicación
const app = express();

// Configuración de middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));





// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});