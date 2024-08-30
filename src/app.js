import express from 'express'
import routes from './routes'

class App {
    constructor() {
        this.app = express()

        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(express.json)
    }

    routes() {
        this.app.use(routes)
    }
}

module.exports = new App().app