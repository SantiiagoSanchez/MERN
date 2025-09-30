const { Router } = require('express');
const router = Router();

const {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser
} = require('../controller/usuarioController');

// Ruta raíz
router.route('/')
  .get(getUsers)
  .post(createUser);

// Ruta con ID
router.route('/:id')
  .get(getUserById)
  .delete(deleteUser)
  .put(updateUser);

module.exports = router;
