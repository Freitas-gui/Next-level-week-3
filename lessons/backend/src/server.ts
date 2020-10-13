import express from 'express'

import './database/connection'

/* Treatment of request and response */
const app = express()

app.use(express.json())

// Route  all app
// Resource = user

// Query Params: http://localhost:3333/users?search=gui
// Route Params: http://localhost:3333/users/1 (Identification or Resource)
// body:  http://localhost:3333/users/1 (Identification or Resource)

app.get('/users/ ', (request, response) => {
    return response.json({ message: 'Hello World' })
})

app.listen(3333)

