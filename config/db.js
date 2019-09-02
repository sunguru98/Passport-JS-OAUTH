const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI.replace('<PASSWORD>', 'd6jk0b1NXjdtsRWc'), {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(connection => console.log('Connected to database'))