const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  // req.logout() is a function that is automatically attached to Passport.js request objects.
  // When we call logout, it takes the cookie that contains the user ID, and it deletes the cookie in there.
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // Second argument is a function that is called whenever someone makes a get request at this address.
  // req = request object
  // res = response object
  // Req is request object that was created during authentication.
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
  // Req is request object that is sent onto any route handler.
};
