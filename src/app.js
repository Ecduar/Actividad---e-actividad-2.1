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


// Importación de rutas
const userRoutes = require('./routes/userRoutes');
const accountRoutes = require("./routes/accountRoutes");
const cooperativeRoutes = require("./routes/cooperativeRoutes");
const uiRoutes = require("./routes/uiRoutes");

// Uso de las rutas
app.use("/users", userRoutes);
app.use("/accounts", accountRoutes);
app.use("/cooperatives", cooperativeRoutes);
app.use("/", uiRoutes);


// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});