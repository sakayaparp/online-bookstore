import express from 'express';
import bodyParser from 'body-parser';
import { v1Router } from './http/api/v1';
import { Poller } from './poller';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', v1Router)

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`[App]: Listening on port ${port}`)
  const poller = Poller.create()
  poller.subscribe()
})