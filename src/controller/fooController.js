import Foo from '../model/Foo.js'

const fooController = {}


fooController.foo = ctx => {
  Foo.foo()
  ctx.body = 'foo'
}


export default fooController