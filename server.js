import express from 'express';

const app = express();
const PORT = 4000; // 어디방

// GET / 요청이 오면
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/data', (req, res) => {
  res.send('data~');
});

// 쉬프트 + 방향키 => 코드 선택
// end키 => 끝까지 코드 선택
// alt + 쉬프트 + 방향키 아래 => 코드 복사
app.get('/get_test', (req, res) => {
  res.send('test');
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
