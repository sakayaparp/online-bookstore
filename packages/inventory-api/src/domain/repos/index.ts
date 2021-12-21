import { SequelizeBookRepo } from "./implementations/sequelizeBookRepo";
import { SequelizeEventRepo } from "./implementations/sequelizeEventRepo";

import { Sequelize } from "sequelize";

// Passing a connection URI
const sequelize = new Sequelize(
  "postgres://admin:admin@localhost:5432/inventory"
);

try {
  sequelize.authenticate();
} catch (error) {
  console.log("Unable to connection to db", error);
}

const bookRepo = new SequelizeBookRepo(sequelize);
const eventRepo = new SequelizeEventRepo();

export { bookRepo, eventRepo };
