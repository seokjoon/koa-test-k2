import Koa from 'koa'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser'


const __dirname = path.resolve()
dotenv.config({ path: path.join(__dirname, ((process.env.NODE_ENV === 'production') ? process.env.PATH_PRODUCTION + '/.env' : './.env')) });
const { MONGO_URI, PORT, } = process.env
const port = PORT || 5000;
const app = new Koa();


app.listen((port), () => {
  console.log('listening to port ' + port)
})


//////// middleware BEGIN
app.use(bodyParser())
//////// middleware END


export default app