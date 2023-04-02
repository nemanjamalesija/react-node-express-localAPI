import { CustomRequest } from '../constants/types';
import { Response } from 'express';

const getAllUsersHandler = (req: CustomRequest, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
const getUser = (req: CustomRequest, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
const createUsersHandler = (req: CustomRequest, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
const updateUser = (req: CustomRequest, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};
const deleteUser = (req: CustomRequest, res: Response) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

export {
  getAllUsersHandler,
  getUser,
  createUsersHandler,
  updateUser,
  deleteUser,
};
