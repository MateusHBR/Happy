import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadsFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  uploadsFolder,
  storage: multer.diskStorage({
    destination: uploadsFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(5).toString('hex');
      const fileName = `${fileHash}-${Date.now()}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
