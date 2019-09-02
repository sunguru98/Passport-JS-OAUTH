const passport = require('passport')
const User = require('../models/User')

// The strategy we are going to use in particular
const GoogleStrategy = require('passport-google-oauth20')

// Using what type of authentication service
passport.use(new GoogleStrategy({
  // The options for that strategy
  // CLIENT ID
  clientID: process.env.GOOGLE_CLIENT_ID,
  // SECRET KEY
  clientSecret: process.env.GOOGLE_SECRET_KEY,
  // CALLBACK URI
  callbackURL: `/auth/google/redirect`

}, async (accessToken, refreshToken, profileDetails, next) => {
  // Passport callback function
  // This runs in mid of the sign in redirect
  // Perfect for checking in the database whether that user already exists or not
  const { id, displayName } = profileDetails
  let user = await User.findOne({ googleId: id })
  if (!user) {
    user = await User.create({ name: displayName, googleId: id })
    console.log('User created successfully', user)
  } else console.log('User exists already', user)
}))

module.exports = passport