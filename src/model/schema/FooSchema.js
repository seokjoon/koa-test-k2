import mongoose from 'mongoose'


const { Schema } = mongoose

export const FooSchema = new Schema({
  date: {
    default: Date.now(),
    type: Date,
  },
  power: [{
    enable: Boolean,
    val: Number,
  }],
  role: {
    title: String,
    val: Number,
  },
  title: String,
})