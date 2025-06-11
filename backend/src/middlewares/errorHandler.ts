import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/client';
import { logger } from '../config/logger.js';

export interface ApiError extends Error {
  statusCode?: number;
  details?: any;
}

export const errorHandler = (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error('Error occurred:', {
    error: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    body: req.body,
    params: req.params,
    query: req.query
  });

  // Zod validation errors
  if (error instanceof ZodError) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      details: error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
      }))
    });
  }

  // Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        return res.status(409).json({
          status: 'error',
          message: 'Unique constraint violation',
          details: error.meta
        });
      case 'P2025':
        return res.status(404).json({
          status: 'error',
          message: 'Record not found',
          details: error.meta
        });
      default:
        return res.status(400).json({
          status: 'error',
          message: 'Database error',
          details: error.message
        });
    }
  }

  // Custom API errors
  if (error.statusCode) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
      details: error.details
    });
  }

  // Default server error
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
    details: process.env.NODE_ENV === 'development' ? error.stack : undefined
  });
};

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: `Route ${req.originalUrl} not found`
  });
};