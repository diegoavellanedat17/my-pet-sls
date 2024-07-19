import serverless from 'serverless-http';
import express, { Request, Response } from 'express';

const app = express();

app.get('/hello', (req: Request, res: Response) => {
  console.log('received:', { req, res });
  res.status(200).json({ message: 'Hello Test' });
});

export const handler = serverless(app);
