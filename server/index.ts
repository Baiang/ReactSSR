import { createServer } from 'http'
import { parse } from 'url'
import * as next from 'next'
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const conf = require('../config/next.config.js')

const app = next({
  dev,
  conf,
  dir:'./src'
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    createServer(handler)
      .listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
  })
