import {Poller} from "../../../inventory/infra/poller"
import {CreateItemUseCase} from "../useCases/createItem/CreateItemUseCase"
import {CreateItemDTO} from "../useCases/createItem/CreateItemDTO"

export class AfterBookCreated {
    private createItem: CreateItemUseCase;

    constructor(usecase: CreateItemUseCase) {
        this.setUpSupsctiptions()
        this.createItem = usecase
    }

    public setUpSupsctiptions() {
        Poller.create().book.on("book:created", async (data: any) => {
            console.log("[SUBSCRIBE AfterBookCreated]", data)
            await this.onItemCreated(data)
        })
    }

    async onItemCreated(event: any): Promise<void> {
        const detail: CreateItemDTO = {
            name: event.payload.props.title,
            amount: event.payload.props.amount,
            price: event.payload.props.price
        };

        await this.createItem.execute(detail, event.payload._id);
    }
}