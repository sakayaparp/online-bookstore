
import * as express from 'express'
import { createBookController } from '../../../domain/use-cases/create-book';

const userRouter = express.Router();

userRouter.post('/',
  (req, res) => createBookController.execute(req, res)
);

export { userRouter };