import {Poller} from "../../../inventory/infra/poller"

export class AfterBookCreated  {
    constructor() {
        this.setUpSupsctiptions()
    }
    
    public setUpSupsctiptions() {
        Poller.create().book.on("book:created", (data: any) => {
            console.log("NEW BOOK CREATED")
            console.log(data)
        })
    }
}