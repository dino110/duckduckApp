import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (
  err,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(404).json({
    success: false,
    error: err.message || "Server Error",
  });
};
