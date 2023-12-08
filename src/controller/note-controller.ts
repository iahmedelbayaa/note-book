import { NextFunction, Request, Response } from 'express';

export const getAllNotes = (req: Request, res: Response, next: NextFunction) => {
  res.send('Get All Notes');
};

export const saveNotes = (req: Request, res: Response, next: NextFunction) => {
  res.send('save Notes');
};


export const updateNotes = (req: Request, res: Response, next: NextFunction) => {
  res.send('update Notes');
};

export const deleteNotes = (req: Request, res: Response, next: NextFunction) => {
  res.send('delete Notes');
};
