
import * as express from 'express'
import { createBookController } from '../../../domain/use-cases/create-book';

const bookRouter = express.Router();

bookRouter.post('/',
  (req, res) => createBookController.execute(req, res)
);

export { bookRouter };