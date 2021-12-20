import * as express from 'express'
import { cartRouter } from '../routes';


const v1Router = express.Router();

v1Router.use('/cart', cartRouter);

export { v1Router }