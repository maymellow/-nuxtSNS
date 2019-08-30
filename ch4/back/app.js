const express = require('express');
const cors = require('cors');
const db = require('./models');
const passport = require('passport');
const session = require('express-session');
const cookie = require('cookie-parser');
const passportConfig = require('./passport');
const morgan = require('morgan');
const app = express();

db.sequelize.sync({ force: true });
passportConfig();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(cookie('cookiesecret'));
app.use(passport.session());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'cookiesecret'
}))
app.use(cors('http://localhost:3000'));

app.get('/', (req, res) => {
  res.send('안녕 반가워!');
})


app.post('/user', async (req, res, next) => {
  try {
    const hash = await bycript.hash(req.body.password, 12);
    const exUser = await db.User.findOne({
      where: {
        email: req.body.email,
      }
    })
    if(exUser) { //이미 회원가입 되어있으면
      //return res.status(403).send('이미 회원 가입 되어있습니다.') - 간단히 가능
      return res.status(403).send({
        errorCode: 1,
        message: '이미 회원 가입 되어있습니다 '
      }) // 에러코드는 마음대로, http 코드는 맞춰야한다
      // 에러도 아니고 성공도 아니고 잘못된 요청(거절)이므로 400 애매하면 403, 401, 400
    }
    const newUser = await db.User.create({
      email: req.body.email,
      password: hash,
      nickname: req.body.nickname
    })
    return res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    return next(err);
  }
})

app.post('/user/login',  async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (err) => { // 세션에다 사용자 정보 저장 (어떻게? serializeUser)
      if (err) {
        console.error(err);
        return next(err);
      }
      return res.json(user);
    });
  })(req, res, next);
});

app.listen(3085, () => {
  console.log(`백엔드 서버 ${3085}번 포트에서 작동중.`)
});

