import express from 'express'

import './database/connection'
import path from 'path'
import cors from 'cors'
import 'express-async-errors'

import routes from './routes'
import errorHandle from './errors/handler'


/* Treatment of request and response */
const app = express()

app.use(cors())
app.use(express.json())
app. use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandle)

app.listen(3333)

// Route  all app
// Resource = user

// Query Params: http://localhost:3333/users?search=gui
// Route Params: http://localhost:3333/users/1 (Identification or Resource)
// body:  http://localhost:3333/users/1 (Identification or Resource)




