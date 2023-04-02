import express from 'express';
import {
  createUsersHandler,
  getUser,
  getAllUsersHandler,
  updateUser,
  deleteUser,
} from '../handlers/usersHandlers.js';

const router = express.Router();

router.route('/').get(getAllUsersHandler).post(createUsersHandler);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

export { router };
