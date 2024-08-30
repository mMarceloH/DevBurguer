const { Router } = require('express')

const routes = new Router()

routes.get('/', (request, response) => {
    console.log(" it's works! ")
    return response.status(200).json({message: 'hello world!'})
})

module.exports = routes