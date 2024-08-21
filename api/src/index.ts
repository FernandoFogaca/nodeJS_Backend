import express, { Request, Response } from 'express';

const app = express();
app.use(express.static('public'))
const porta = 3030;

app.get('/', (req, res): void => {
  res.send('API with NodeJS and TS!');
});

app.get('/Ping', (req, res): void => {
  res.send('Pong <Ó');
});


app.get('/soma', (req: Request, res: Response): void => {

    // http://localhost:3030/soma?num1=100&num2=120&num3=500
    const {num1, num2, num3}= req.query as { num1: string; num2: string; num3: string };
    const soma = parseInt(num1, 10) + parseInt(num2, 10) + parseInt(num3, 10);
  
    res.send(`${soma}`);
  });

  app.get('/departamentos/:id', (req, res): void => {

    console.log(req.params)
    res.send('Pong <Ó');
  });

  //http://localhost:3030/departamentos
  //http://localhost:3030/departamentos/25


  app.get('/clientes', (req:Request, res:Response): void => {

    const html: string = '<link href="css/style.css" rel="stylesheet"><h1>Clientes</h1>';

    res.send(html);
  });



app.listen(porta, () => {
  console.log(`Server is running on port ${porta}`);
});

