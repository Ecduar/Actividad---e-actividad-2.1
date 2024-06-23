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

// Actualizar una cooperativa existente
exports.updateCooperative = async (req, res) => {
  try {
    const cooperative = await Cooperative.findByPk(req.params.id);
    if (cooperative) {
      await cooperative.update(req.body);
      res.redirect("/cooperatives");
    } else {
      res.status(404).send("Cooperativa no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Eliminar una cooperativa
exports.deleteCooperative = async (req, res) => {
  try {
    const cooperative = await Cooperative.findByPk(req.params.id);
    if (cooperative) {
      await cooperative.destroy();
      res.redirect("/cooperatives");
    } else {
      res.status(404).send("Cooperativa no encontrada");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Agregar un usuario a una cooperativa
exports.addUserToCooperative = async (req, res) => {
  try {
    const cooperative = await Cooperative.findByPk(req.params.cooperativeId);
    const user = await User.findByPk(req.params.userId);
    if (cooperative && user) {
      await cooperative.addUser(user);
      res.redirect(`/cooperatives/${req.params.cooperativeId}/edit`);
    } else {
      res.status(404).send("Cooperativa o Usuario no encontrado");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Eliminar un usuario de una cooperativa
exports.removeUserFromCooperative = async (req, res) => {
  try {
    const cooperative = await Cooperative.findByPk(req.params.cooperativeId);
    const user = await User.findByPk(req.params.userId);
    if (cooperative && user) {
      await cooperative.removeUser(user);
      res.redirect(`/cooperatives/${req.params.cooperativeId}/edit`);
    } else {
      res.status(404).send("Cooperativa o Usuario no encontrado");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
