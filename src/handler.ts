import serverless from 'serverless-http';
import express, { Request, Response } from 'express';

const app = express();

app.get('/hello', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello World' });
});

export const handler = serverless(app);
