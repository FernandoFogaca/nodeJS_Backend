import http from 'http';

const server = http.createServer((req, res) => {
  let n1 = 10;
  let n2 = 5;
  let result = n1 + n2;

  res.setHeader('Content-Type', 'text/html');

  if (result % 2 === 0) {
    res.end(`Número ${result} é par.`);
  } else {
    res.end(`Número ${result} é <span style="color:red">ímpar</span>.`);
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Servidor rodando em http://localhost:3000');
});