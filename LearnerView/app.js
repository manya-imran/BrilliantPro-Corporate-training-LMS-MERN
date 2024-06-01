import express from 'express'
import connectDB from './db/connectdb.js'
import web from './routes/web.js'
//import session from 'express-session'
const app = express()
import path from 'path'
//import config from './config/config.js'
const port = process.env.PORT || '3000'

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"
//Database Connection
connectDB(DATABASE_URL)

// set template engine
app.set('view engine', 'ejs')

//middleware to access request body
app.use(express.urlencoded({extended:true}));
//Load Routes
app.use('/', web)

//app.use(express.static('F:\Trial Express Mongo Project\public'))

//Middleware to access sessionsecret
//app.use(session({secret:config.sessionSecret}));
app.listen(port, ()=>{
    console.log('Server listening at http://localhost:${port}')
})