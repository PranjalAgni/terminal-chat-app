import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import errorHandler from "errorhandler";

import { IHealth } from "./interface/response";

const initalizeServer = (): Application => {
  const app = express();

  // set up middlewares
  app.use(morgan("combined"));
  app.use(express.json());
  app.use(compression());
  app.use(helmet());

  app.get("/", (req: Request, res: Response) => {
    const response: IHealth = {
      status: "Flying"
    };

    res.json(response);
  });

  app.use(errorHandler);

  return app;
};

export default initalizeServer;
