import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const porta = 3030;

app.get('/', (req, res): void => {
  res.send('API with NodeJS and TS!');
});

app.get('/Ping', (req, res): void => {
  res.send('Pong <Ó');
});

app.get('/soma', (req: Request, res: Response): void => {
  // http://localhost:3030/soma?num1=100&num2=120&num3=500
  const { num1, num2, num3 } = req.query as { num1: string; num2: string; num3: string };
  const soma = parseInt(num1, 10) + parseInt(num2, 10) + parseInt(num3, 10);

  res.send(`${soma}`);
});

app.get('/departamentos/:id', (req, res): void => {
  console.log(req.params);
  res.send('Pong <Ó');
});

app.get('/clientes', (req: Request, res: Response): void => {
  const html: string = '<link href="css/style.css" rel="stylesheet"><h1>Clientes</h1>';
  res.send(html);
});

app.get('/funcionarios', (req: Request, res: Response): void => {
  const funcionarios = {
    nome: 'Fernando',
    salario: "7000.20",
    idade: "35",
    cargo: 'Analista de Sistemas'
  };
  res.contentType('application/json');
  res.send(funcionarios);
});

app.post('/departamentos', (req: Request, res: Response): void => {
 
  console.log(req.body);
  res.send('POST departamentos');
});

app.listen(porta, () => {
  console.log(`Server is running on port ${porta}`);
});
