import { NextFunction, Request, Response } from "express";

export const handleErrors = (error: Error, request: Request, response: Response, next: NextFunction): Response => {
  return response.status(500).send({ code: "SERVER_ERROR" });
};

