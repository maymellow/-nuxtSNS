const passport = require('passport');
const local = require('./local');
const db = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    // 사용자 정보를 서버에 저장하는데 서버에 전부 저장하면 메모리가 터지므로
    // 가볍게 저장하기 위해 아이디만 메모리에 저장
    // req.login user가 여기로 옴. 그때 한번 저장
    return done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.User.findOne({ where: { id } });
      return done(null, user); // req.user, req.isAuthenticated() === true,
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });
  local();
};
