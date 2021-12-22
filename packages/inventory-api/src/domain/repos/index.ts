import { SequelizeBookRepo } from "./implementations/sequelizeBookRepo";
import { SequelizeEventRepo } from "./implementations/sequelizeEventRepo";
import models from '../../../models';



const bookRepo = new SequelizeBookRepo(models.sequelize);
const eventRepo = new SequelizeEventRepo();

export { bookRepo, eventRepo };
