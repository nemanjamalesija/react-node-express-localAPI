import fs from 'fs';
import { Request, Response, NextFunction } from 'express';
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

export { getRoutes, addTour };
