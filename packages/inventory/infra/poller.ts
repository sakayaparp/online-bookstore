import hertzy from 'hertzy'
import { EventProps } from '../domain/event'
import {eventRepo} from "../domain/repos"

export class Poller {
    public book = hertzy.tune('book')
    private static instance: Poller = null;

    public publish() {
        eventRepo.events.forEach(event => {
            if (event.status === "CREATED") {
                this.book.emit(event.name, event)
                console.log("PUBLISHED EVENT", event)
                event.status = "DISPATCHED"
            }
        })
    }

    public static create() {
        if(this.instance === null) {
            this.instance = new Poller()
        }
        return this.instance
    }
}