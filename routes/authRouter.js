const express = require('express')
const passport = require('passport')

const router = express.Router()

// Normal Login
router.get('/login', (req, res) => {
  res.render('login')
})

// Google Login
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

// On successful google sign in
router.get('/google/redirect', 
  passport.authenticate('google'),
  (req, res) => {
    res.send('Signed in sucessfully')
})

// Logout
router.get('/logout', (req, res) => {
  res.send('Logging outtt')
})

module.exports = router