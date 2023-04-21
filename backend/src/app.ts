import "dotenv/config";

import express, { Request, Response } from 'express';
import createHttpError, { isHttpError } from "http-errors";

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found."))
})

app.use((error: unknown, req: Request, res: Response) => {
  console.error(error);
  let errorMsg = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMsg = error.message;
  }
  res.status(statusCode).json({ error: errorMsg })
})

export default app