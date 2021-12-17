import express from 'express';
import bodyParser from 'body-parser';
import { v1Router } from './packages/inventory/infra/http/api/v1';
import { v1Router as v1RouterCart } from './packages/bookstore/infra/http/api/v1';
import { Poller } from './packages/inventory/infra/poller';
import "./packages/bookstore/cart/subscriptions"

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', v1Router, v1RouterCart)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`[App]: Listening on port ${port}`)
    const poller = Poller.create()
    setInterval(() => {
        console.log(new Date())
        poller.publish()
    }, 2000)
})