const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false
  }
);

async function startApp() {
  try {
    await sequelize.sync();
    console.log(
      "Conexión a la base de datos establecida y sincronización exitosa."
    );
  } catch (error) {
    console.error("Error al conectar y sincronizar la base de datos:", error);
  }
}

startApp();

module.exports = sequelize;
