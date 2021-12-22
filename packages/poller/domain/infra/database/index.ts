import {OutboxesRepoImpl} from "implementation/OutboxesRepoImpl";


const bookRepo = new OutboxesRepoImpl(models.sequelize);

export {bookRepo, eventRepo};
