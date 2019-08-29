const express = require('exporess');

const app = express();

app.get('/', (req, res) => {
  res.send('안녕 반가워');
})
app.listen(3005, () => {
  console.log(`백엔드 서버 ${3005}번 포트에서 작동중.`)
});
