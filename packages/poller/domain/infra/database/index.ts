import {OutboxesRepoImpl} from "./implementation/OutboxesRepoImpl";
import models from "../../../../inventory-api/models"


const outboxRepo = new OutboxesRepoImpl(models.sequelize);

export {outboxRepo};
