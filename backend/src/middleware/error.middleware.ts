import { NextFunction, Request, Response } from "express";

import { ZodError } from "zod";

import { ApiError } from "../shared/errors/ApiError.js";

export function errorMiddleware(
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction
) {
  console.error(error);

  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.flatten(),
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
}