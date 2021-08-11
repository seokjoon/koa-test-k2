import Router from 'koa-router'
import fooController from '../controller/fooController.js'


const fooRoute = new Router()


fooRoute.get('/foo', fooController.foo)


export default fooRoute