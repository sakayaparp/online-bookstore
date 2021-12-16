
import { SequelizeBookRepo } from "./implementations/sequelizeBookRepo";
import { SequelizeOutboxRepo } from "./implementations/sequelizeOutboxRepo";
// import models from "../../../shared/infra/database/sequelize/models";

const bookRepo = new SequelizeBookRepo();
const outboxRepo = new SequelizeOutboxRepo();

export { bookRepo, outboxRepo }
