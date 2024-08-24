
import { Request, Response } from 'express';

const rootResponse = (req: Request, res:Response): void => {
  res.send('API with NodeJS and TS! MVC');
};


export default rootResponse;

