

    //res.end('Salut! a va? ')

    // Realize a soma de dois numeros
    // se o resultado da soma for PAR
    //mostre o numero com a mensagem PAR ao lado
    // caso contrário informe o NUMERO  e a mensagem IMPAR ao lado

import http from 'http';

const server = http.createServer((req, res) => {

    
        let n1 = 150;
        let n2 = 50;
        let result = n1 + n2

        res.setHeader('Content-Type', 'text/html');

        if(result % 2 === 0)
        {
            res.end(`Numero ${result} eh <span style="color:red">Par</span.`);
        }
        else{
            res.end(`Numero ${result} eh Impar`);
        }


    

    

});



server.listen(3000, 'localhost');
