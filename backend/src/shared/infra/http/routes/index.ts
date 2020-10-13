import { Router } from 'express';
import orphanagesRouter from '@modules/orphanages/infra/http/routes/orphanages.route';

const routes = Router();

routes.use('/orphanages', orphanagesRouter);

export default routes;
