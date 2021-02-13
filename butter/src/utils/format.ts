import { Request, Response, NextFunction, RequestHandler } from "express";
import { IResponseFormat } from "../interface/response";

export const asyncHandler = (expressHandler: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  return Promise.resolve(expressHandler(req, res, next)).catch(console.error);
};

export const formatResponse = (payload: IResponseFormat): void => {
  const { res, result, error } = payload;
  res.json({
    status: res.status,
    result,
    error
  });
};
