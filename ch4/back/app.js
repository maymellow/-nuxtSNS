const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('안녕 반가워ㅋ');
})


app.post('/user', (req, res) => {
  res.body
})

app.listen(3085, () => {
  console.log(`백엔드 서버 ${3085}번 포트에서 작동중.`)
});
