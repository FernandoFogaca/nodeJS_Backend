Aula 01 (30.07.2024)
Conteúdo:
 - Introdução ao NodeJS
 - Executando scripts
 - Node CLI
 - Lendo argumentos na CLI
 - Instalando um pacote
 - Lendo argumentos na CLI com Yargs
- Anotações:
Estamos usando no repositório o commit semântico semantic commit.

Aula 02 (01.08.2024)
Conteúdo:
 - Correção de problemas de ambiente
 - NPM
 - Dependências de produção
 - Dependências de desenvolvimento
 - Scripts
 - Node Watch
- Anotações:
-  N/A

Aula 03 (05.08.2024)
Conteúdo:
 Correção de exercício
 versionamento de código
 import vs require
 backend
 requisições HTTP
Anotações:
N/A

Aula 04 (08.08.2024)
 revisão HTTP
 métodos HTTP
 requests com HTTP usando CURL
 fluxo de envio de dados (form -> backend)
 setup da aplicação NodeJS com TS
Anotações
CURLS: Exemplo de GET:

curl http://localhost:3000/cadastro
Exemplo de POST:
curl -X POST http://localhost:3000/cadastro

Aula 05 (12.08.2024)
 Express
 Método GET
 Extraindo informações via Query String
 Extraindo informações via parameter
Anotações
From scratch: termo usado quando desenvolvemos algo do zero.

Aula 06 (13.08.2024)
 Verbos HTTP
 HTTP Responses
 Status Codes
 Content Types
 Requisições Via GET
 Requisições Via POST
 Postman
 Collection
Anotações
Aplicativos similares ao Postman
Thunderclient
Insomnia
Postman

Aula 07 (15.08.2024)
 Estruturação do projeto com MVC
 Conexão com banco de dados usando mysql2
 Listagem de Departamentos
 Inserção de Departamentos


Anotações
Estudar padrões de código (CLEAN CODE, SOLID, MVC - Model View Controller, DRY, etc).
Corpo da request ou corpo da response => Payload da request e payload da response
SQL Injection: entender como funciona para evitar problemas de segurança

Aula 08 (19.08.2024)
 Overview Docker com docker-compose
 Correção do exercício do DELETE
 CI/CD com a Vercel
 Usando um template
 Arquivo de deploy da Vercel
 Deploy na Vercel
 Validators com Next
 
Aula 09 (20.08.2024)
 .env para o banco de dados
 PUT/PATCH para departamentos
 Configuração de environment na Vercel
 Review de valitadors
 
Aula 10 (22.08.2024)
 Correção do exercício do PUT
 Correção do exercício do Departamentos pelo ID
 Implementação de rota de funcionários com departamentos (conceito BFF)
 CORS
 Extras
Anotações
Ferramentas de varredura de código: ficam normalmente interligadas no CI/CD. SonarQube (valida complexidade, code smells, redundância...)
