import {OutboxesRepo} from "../outboxesRepo";
import {Sequelize} from "sequelize/dist";

export class OutboxesRepoImpl implements OutboxesRepo {
    public sequelize: Sequelize

    constructor(sequalize: Sequelize) {
        this.sequelize = sequalize;
    }

    async get(): Promise<any> {
        return await this.sequelize.model("outboxes").findAll({ where: { status: "CREATED" } })
    }

    async updateStatus(outboxes: any[]): Promise<any> {
        let ids = outboxes.map(v => v.id)
        console.log("ids >> ", ids)

        return await this.sequelize.model("outboxes").update({ status: 'DISPATCHED'}, {
            where: {
                id: ids,
            }
        });
    }
}
