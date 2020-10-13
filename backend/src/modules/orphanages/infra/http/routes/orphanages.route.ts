import uploadConfig from '@config/upload';
import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from '../controllers/OrphanagesController';

const orphanagesRouter = Router();
const upload = multer(uploadConfig);
const orphanagesController = new OrphanagesController();

orphanagesRouter.post('/', upload.array('images'), orphanagesController.create);
orphanagesRouter.get('/', orphanagesController.index);
orphanagesRouter.get('/:id', orphanagesController.show);

export default orphanagesRouter;
