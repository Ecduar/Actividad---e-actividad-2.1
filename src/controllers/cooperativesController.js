const { Cooperative, User, UserCooperative } = require("../models");

// Obtener todas las cooperativas
exports.getAllCooperatives = async () => {
  try {
    const cooperatives = await Cooperative.findAll();
    return cooperatives;
  } catch (error) {
    throw error;
  }
};

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
exports.newCooperativeForm = async (req, res) => {
  try {
    const users = await User.findAll();
    res.render("cooperatives/form", { cooperative: null, users });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Crear una nueva cooperativa
exports.createCooperative = async (req, res) => {
  try {
    const { name, description, userIds } = req.body;
    const cooperative = await Cooperative.create({ name, description });
    if (userIds) {
      await cooperative.setUsers(userIds);
    }
    res.redirect("/cooperatives");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mostrar formulario para editar una cooperativa existente
exports.editCooperativeForm = async (req, res) => {
  try {
    const cooperative = await Cooperative.findByPk(req.params.id, { include: { model: User, as: 'Users' } });
    const users = await User.findAll();
    if (cooperative) {
      res.render("cooperatives/form", { cooperative, users });
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
    const { name, description, userIds } = req.body;
    const cooperative = await Cooperative.findByPk(req.params.id);
    if (cooperative) {
      await cooperative.update({ name, description });
      if (userIds) {
        await cooperative.setUsers(userIds);
      }
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
    const user = await User.findByPk(req.body.userId);
    if (cooperative && user) {
      await cooperative.addUser(user, { through: { role: 'member' } }); // Proporciona un valor para el campo 'role'
      res.redirect(`/cooperatives/${req.params.cooperativeId}/edit`);
    } else {
      res.status(404).send("Cooperativa o Usuario no encontrado");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// Mostrar la página de gestión de usuarios para una cooperativa específica
exports.manageCooperativeUsers = async (req, res) => {
  try {
    const cooperative = await Cooperative.findByPk(req.params.id, { include: { model: User, as: 'Users' } });
    const users = await User.findAll();
    if (cooperative) {
      res.render("cooperatives/manage", { cooperative, users });
    } else {
      res.status(404).send("Cooperativa no encontrada");
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
      await UserCooperative.destroy({
        where: {
          userId: user.id,
          cooperativeId: cooperative.id
        }
      });
      res.redirect(`/cooperatives/${req.params.cooperativeId}/edit`);
    } else {
      res.status(404).send("Cooperativa o Usuario no encontrado");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
