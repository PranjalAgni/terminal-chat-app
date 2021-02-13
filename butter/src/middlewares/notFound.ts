import { Request, Response, NextFunction } from "express";

export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(404);
  next(new Error(`Cannot find ${req.path}`));
};
