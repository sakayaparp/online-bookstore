
import { SequelizeBookRepo } from "./implementations/sequelizeBookRepo";
// import models from "../../../shared/infra/database/sequelize/models";

const userRepo = new SequelizeBookRepo();

export { userRepo }
