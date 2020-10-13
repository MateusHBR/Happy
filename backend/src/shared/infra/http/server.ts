import express from 'express';
import 'express-async-errors';

import '@shared/infra/typeorm';
import '@shared/container';

import cors from 'cors';
import errorHandler from '@shared/errors/errorHandler';
import uploadConfig from '@config/upload';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(uploadConfig.uploadsFolder));
app.use(routes);

app.use(errorHandler);

app.listen(3333, () => {
  console.log('Server Started on port 3333');
});
