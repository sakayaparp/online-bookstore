import hertzy from 'hertzy'
import { OutboxProps } from '../domain/outbox'

export class Poller {
    public book = hertzy.tune('book')
    private static instance: Poller = null;

    public publish(data: OutboxProps) {
        console.log('publish naja', data)
        this.book.emit(data.eventName, data)
    }

    public subscribe() {
        this.book.on('Book:CREATE', (data) => {
            console.log('sub data: ', data)
        })
    }

    public static create() {
        if(this.instance === null) {
            this.instance = new Poller()
        }
        return this.instance
    }
}