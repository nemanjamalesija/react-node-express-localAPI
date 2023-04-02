import fs from 'fs';
import { Response, NextFunction } from 'express';
import { CustomRequest } from '../constants/types';

const tours = JSON.parse(
  fs.readFileSync('./constants/dev-data/data/tours-simple.json', 'utf-8')
);

//handlers
const getRoutes = (req: CustomRequest, res: Response) => {
  res.status(200).json({
    status: 'success',
    time: req.time,
    results: tours.length,
    data: {
      tours,
    },
  });
};

const addTour = (req: CustomRequest, res: Response) => {
  const newTour = { ...req.body };
  const newTours = [...tours, newTour];

  fs.writeFile(
    './constants/dev-data/data/tours-simple.json',
    JSON.stringify(newTours),
    (error) => {
      res.status(201).json({
        status: 'success',
        time: req.time,
        data: { tour: newTour },
      });
    }
  );
};

const checkBody = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (!req.body.price || !req.body.name || !req.body.rating)
    return res.status(404).json({
      message: 'Invalid tour informations',
    });

  next();
};

export { getRoutes, addTour, checkBody };
