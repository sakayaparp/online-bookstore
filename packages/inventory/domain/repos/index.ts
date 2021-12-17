
import { SequelizeBookRepo } from "./implementations/sequelizeBookRepo";
import { SequelizeEventRepo } from "./implementations/sequelizeEventRepo";
// import models from "../../../shared/infra/database/sequelize/models";

const bookRepo = new SequelizeBookRepo();
const eventRepo = new SequelizeEventRepo();

export { bookRepo, eventRepo }
