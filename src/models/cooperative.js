const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
);

// Cargar modelos
const User = require("./models/User")(sequelize, Sequelize);
const UserCooperative = require("./models/UserCooperative")(
  sequelize,
  Sequelize
);
const SavingAccount = require("./models/SavingAccount")(sequelize, Sequelize);
const LoanAccount = require("./models/LoanAccount")(sequelize, Sequelize);
const Cooperative = require("./models/Cooperative")(sequelize, Sequelize);

// Exportar sequelize para usarlo en otros archivos
module.exports = sequelize;

// Función para sincronizar la base de datos con las migraciones
async function syncDatabase() {
  try {
    // Ejecutar migraciones (crear tablas si no existen)
    await sequelize.sync();
    console.log("Base de datos sincronizada con éxito.");
  } catch (error) {
    console.error("Error al sincronizar la base de datos:", error);
  }
}

// Ejecutar la sincronización al iniciar la aplicación
syncDatabase();
