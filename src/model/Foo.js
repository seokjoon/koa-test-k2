import { FooSchema } from './schema/FooSchema.js'
import mongoose from 'mongoose'


/**
 * @memberOf Foo#
 */
FooSchema.methods.serialize = function() {
  const outs = this.toJSON()
  delete outs.date
  return outs
}


/**
 * @memberOf Foo
 */
FooSchema.statics.foo = function () {
  return console.log('foo')
}


/**
 * @class Foo
 * https://intellij-support.jetbrains.com/hc/en-us/community/posts/207115889-Mongoose-static-methods-autocompletion-in-WebStorm
 */
const Foo = mongoose.model('Foo', FooSchema)


export default Foo