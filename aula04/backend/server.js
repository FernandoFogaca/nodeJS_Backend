

import http from 'http';

const PORTA = 3000;
const SERVER = 'localhost';

const server = http.createServer((req, res) => {

    console.log(`URL acessada: ${req.url}, Method: ${req.method}`);
    if (req.url === '/clientes') {
        res.end("Pagina de Clientes");
        return;
    }

    if (req.url === '/cadastro' && req.method === 'Post') {
        res.end("Cadastro efetuado com sucesso");
        return;
    }
    res.end("Running.*****.");

    
});

server.listen(PORTA, SERVER, ()=>{

    console.log(`Servidor Running... ${SERVER}:${PORTA}`);
});
