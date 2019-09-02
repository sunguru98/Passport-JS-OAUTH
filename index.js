const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

require('./config/passportConfig')
require('./config/db')

const authRouter = require('./routes/authRouter')
const app = express()
const port = process.env.PORT || 3000

// View Engine
app.set('view engine', 'ejs')
// Auth Router
app.use('/auth', authRouter)

// ROUTES
app.get('/', (req, res) => {
  res.render('home')
})

// PORT
app.listen(port, () => console.log(`Server started on port ${port}`))