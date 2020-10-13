import express from 'express'
import './database/connection'

import routes from './routes'


/* Treatment of request and response */
const app = express()

app.use(express.json())
app. use(routes)

app.listen(3333)

// Route  all app
// Resource = user

// Query Params: http://localhost:3333/users?search=gui
// Route Params: http://localhost:3333/users/1 (Identification or Resource)
// body:  http://localhost:3333/users/1 (Identification or Resource)




