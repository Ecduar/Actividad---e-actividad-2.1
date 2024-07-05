const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const { authenticateToken, authorizeRoles } = require("./middleware/auth");

// Configuración de variables de entorno
dotenv.config();

// Inicialización de la aplicación
const app = express();

// Configuración de middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookieParser());

// Configuración del motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Importación de rutas
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const accountRoutes = require("./routes/accountRoutes");
const cooperativesRoutes = require("./routes/cooperativesRoutes");
const uiRoutes = require("./routes/uiRoutes");
const summaryRoutes = require("./routes/summaryRoutes");

// Ruta de inicio de sesión
app.get("/login", (req, res) => {
  res.render("login");
});

// Middleware de autenticación y redirección
function redirectToLogin(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    res.redirect("/login"); // Redirigir al inicio de sesión si no hay token
  } else {
    next(); // Pasar al siguiente middleware si el usuario está autenticado
  }
}

// Uso de las rutas
app.use("/auth", authRoutes);
app.use(
  "/users",
  redirectToLogin,
  authenticateToken,
  authorizeRoles("admin", "editor"),
  userRoutes
); // Proteger rutas
app.use(
  "/accounts",
  redirectToLogin,
  authenticateToken,
  authorizeRoles("admin", "editor"),
  accountRoutes
); // Proteger rutas
app.use(
  "/cooperatives",
  redirectToLogin,
  authenticateToken,
  authorizeRoles("admin", "editor"),
  cooperativesRoutes
); // Proteger rutas
app.use("/", uiRoutes);
app.use("/", summaryRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

// Sincronizar la base de datos y luego iniciar el servidor
const sequelize = require("./config/database");
sequelize
  .sync()
  .then(() => {
    console.log("Tablas sincronizadas.");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error al sincronizar las tablas:", error);
  });
