const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("users");

// Can't assume that every profile will have a Google profile ID, because someone might use Facebook, or some other authentication method. user.id refers to the users._id key.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Used for grabbing a cookie and converting it back to a User model. We want to search over our big collection of users, and after we find it, we call done with that user.
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Last step is to make sure passport is managing our authentication with cookies, as it can be using many different methods to keep track of a user. It needs to be aware it has to use cookies. Out of the box, Express.js doesn't know how to handle cookies. It will need a helper library called cookie-session. That is in index.js.

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
