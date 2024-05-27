import express, { Application, Request, Response, NextFunction, Router } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { HomeRoute } from './routes';

dotenv.config();

const app: Application = express();
const router: Router = Router();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/', new HomeRoute().router);

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

const port = 3001;

app.listen(port, () => {
  console.log(`Server started on port  ${port}`);
});
