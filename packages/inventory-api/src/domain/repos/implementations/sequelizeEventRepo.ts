import { IEventRepo } from "../eventRepo";
import {Sequelize} from "sequelize";
import {IDomainEvent} from "../../events/IDomainEvents";

export class SequelizeEventRepo implements IEventRepo {
  public events: IDomainEvent<any>[] = [];

  public sequelize: Sequelize;

  constructor(sequalize: Sequelize) {
    this.sequelize = sequalize;
  }

  async save(data: IDomainEvent<any>): Promise<any> {
    console.log("Event repo save", data);
    this.sequelize.model("outboxes").create(data)
  }
}
