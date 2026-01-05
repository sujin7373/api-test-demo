import express from 'express';

const app = express();
const PORT = 4000; // 어디방ZZ

// GET / 요청이 오면
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/data', (req, res) => {
  res.send('data~');
});

app.get('/get_test', (req, res) => {
  res.send('test');
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
