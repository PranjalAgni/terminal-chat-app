import { Response } from "express";

export interface IHealth {
  status: string;
}

export interface IResponseFormat {
  res: Response;
  result?: never;
  error?: Error;
}
