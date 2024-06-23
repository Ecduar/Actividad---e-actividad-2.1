const { Cooperative, User, UserCooperative } = require("../models");

// Listar todas las cooperativas
exports.listCooperatives = async (req, res) => {
  try {
    const cooperatives = await Cooperative.findAll();
    res.render("cooperatives/index", { cooperatives });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para crear una nueva cooperativa
exports.newCooperativeForm = (req, res) => {
  res.render("cooperatives/form", { cooperative: null });
};

// Crear una nueva cooperativa
exports.createCooperative = async (req, res) => {
  try {
    await Cooperative.create(req.body);
    res.redirect("/cooperatives");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para editar una cooperativa existente
exports.editCooperativeForm = async (req, res) => {
  try {
    const cooperative = await Cooperative.findByPk(req.params.id);
    if (cooperative) {
      res.render("cooperatives/form", { cooperative });
    } else {
      res.status(404).send("Cooperativa no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
