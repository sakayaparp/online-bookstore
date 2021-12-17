import {OrderCreated} from "../events/orderCreated";
import {IHandle} from "../../../share/domain/events/IHandle";
import {DomainEvents} from "../../../share/domain/events/DomainEvents";


export class AfterOrderCreated implements IHandle<OrderCreated> {
    private createOrder: CreateOrder;

    constructor(createOrder: CreateOrder) {
        this.setupSubscriptions();
        this.createOrder = createOrder;
    }

    setupSubscriptions(): void {
        // Register to the domain event
        DomainEvents.register(this.onOrderCreated.bind(this), OrderCreated.name);
    }

    private async onOrderCreated (event: OrderCreated): Promise<void> {
        const {cart} = event;

        try {
            await this.createOrder.execute({cartId: cart.cartId.id.toString()})
            console.log(`[AfterUserCreated]: Successfully executed CreateMember use case AfterUserCreated`)
        } catch (err) {
            console.log(`[AfterUserCreated]: Failed to execute CreateMember use case AfterUserCreated.`)
        }
    }s
}