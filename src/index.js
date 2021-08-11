import app from './app.js'
import Router from 'koa-router'
import fooRoute from './route/fooRoute.js'


const router = new Router()


router.use('/api', fooRoute.routes())


app.use(router.routes()).use(router.allowedMethods())