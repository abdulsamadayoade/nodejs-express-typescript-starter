import { Response } from "express";

function sendErrorResponse(
  res: Response,
  statusCode: number,
  message: string,
  error?: any
) {
  res.status(statusCode).json({
    statusCode,
    status: "error",
    message,
    error: error instanceof Error ? error.message : error,
  });
}

function sendSuccessResponse(
  res: Response,
  statusCode: number,
  message: string,
  data?: any
) {
  res.status(statusCode).json({
    statusCode,
    status: "success",
    message,
    data,
  });
}

export { sendErrorResponse, sendSuccessResponse };
