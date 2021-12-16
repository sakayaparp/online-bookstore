
import { SequelizeBookRepo } from "./implementations/sequelizeBookRepo";
// import models from "../../../shared/infra/database/sequelize/models";

const bookRepo = new SequelizeBookRepo();

export { bookRepo }
