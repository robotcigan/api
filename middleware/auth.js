const passport = require('passport');
const Strategy = require('passport-local').Strategy;

passport.use(new Strategy((username, password, cb) => {
  if (username == '1' && password == '1' ) {
    return cb(null, username);
  }
}));

passport.serializeUser((username, cb) => {
  cb(null, username);
});

passport.deserializeUser((username, cb) => {
  cb(null, { username });
});

module.exports = passport;
