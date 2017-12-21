const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session"); // Enables cookies and makes Express.js aware of them.
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport.js");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    // cookieSession expects an object with two properties, maxAge and keys
    maxAge: 30 * 24 * 60 * 60 * 1000, // Milliseconds
    keys: [keys.cookieKey] // By default, whenever we send out this cookie, it's automatically encrypted so the user can't change the key and pretend to be someone else.
    // cookieSession allows us to specify multiple keys, and it will randomly pick one. It allows us to provide multiple keys.
  })
);
// Makes passport aware that it needs to use cookies to handle authentication.
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

