/* eslint-disable import/no-unresolved */
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from "cors";

import AppError from "@shared/errors/AppError";

// Módulos Globais
import userRouter from "@modules/gUser/infra/http/routes/gUsers.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: "error", message: err.message });
  }

  console.error(err);

  return response
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});

export default app;
