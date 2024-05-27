import { Router, Request, Response } from 'express';
import { HomeController } from '../controllers/HomeController';

class HomeRoute {
  public router: Router = Router();

  constructor() {
    this.initializeRoutes(this.router);
  }

  public initializeRoutes(router: any): void {
    router.get('/', HomeController.getAll);
    router.get('/ajay', HomeController.getAll);
  }
}
export default HomeRoute;

