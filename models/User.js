const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  googleId: {
    type: String,
    required: [true, 'Google Id is required']
  }
}, { timestamps: true })

const User = model('user', userSchema)

module.exports = User