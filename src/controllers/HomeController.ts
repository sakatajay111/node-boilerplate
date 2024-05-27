import { Request, Response } from 'express';
import { HomeService } from '../DAO/HomeService';

export class HomeController {
  public static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const message = await new HomeService().findAll(); // Call a method on the model
      res.status(200).send({ message });
    } catch (err) {
      console.error(err);
      res.status(500).send({ error: 'Internal server error' });
    }
  }
}