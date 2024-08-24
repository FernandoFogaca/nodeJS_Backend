Portuguese =>

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
 - Correção de exercício
 - versionamento de código
 - import vs require
 - backend
 - requisições HTTP
Anotações:
N/A

Aula 04 (08.08.2024)
 - revisão HTTP
 - métodos HTTP
 - requests com HTTP usando CURL
 - fluxo de envio de dados (form -> backend)
 - setup da aplicação NodeJS com TS
Anotações
CURLS: Exemplo de GET:
curl http://localhost:3000/cadastro
Exemplo de POST:
curl -X POST http://localhost:3000/cadastro

Aula 05 (12.08.2024)
 - Express
 - Método GET
 - Extraindo informações via Query String
 - Extraindo informações via parameter
Anotações
From scratch: termo usado quando desenvolvemos algo do zero.

Aula 06 (13.08.2024)
 - Verbos HTTP
 - HTTP Responses
 - Status Codes
 - Content Types
 - Requisições Via GET
 - Requisições Via POST
 - Postman
 - Collection
Anotações
Aplicativos similares ao Postman
Thunderclient
Insomnia
Postman

Aula 07 (15.08.2024)
 - Estruturação do projeto com MVC
 - Conexão com banco de dados usando mysql2
 - Listagem de Departamentos
 - Inserção de Departamentos


Anotações
Estudar padrões de código (CLEAN CODE, SOLID, MVC - Model View Controller, DRY, etc).
Corpo da request ou corpo da response => Payload da request e payload da response
SQL Injection: entender como funciona para evitar problemas de segurança

Aula 08 (19.08.2024)
 - Overview Docker com docker-compose
 - Correção do exercício do DELETE
 - CI/CD com a Vercel
 - Usando um template
 - Arquivo de deploy da Vercel
 - Deploy na Vercel
 - Validators com Next
 
Aula 09 (20.08.2024)
 - .env para o banco de dados
 - PUT/PATCH para departamentos
 - Configuração de environment na Vercel
 - Review de valitadors
 
Aula 10 (22.08.2024)
 - Correção do exercício do PUT
 - Correção do exercício do Departamentos pelo ID
 - Implementação de rota de funcionários com departamentos (conceito BFF)
 - CORS
 Extras
Anotações
Ferramentas de varredura de código: ficam normalmente interligadas no CI/CD. SonarQube (valida complexidade, code smells, redundância...)



English =>

Lesson 01 (30/07/2024)
Content:

Introduction to NodeJS
Running scripts
Node CLI
Reading arguments in the CLI
Installing a package
Reading arguments in the CLI with Yargs
Notes:
We are using semantic commits in the repository.
Lesson 02 (01/08/2024)
Content:

Fixing environment issues
NPM
Production dependencies
Development dependencies
Scripts
Node Watch
Notes:
N/A
Lesson 03 (05/08/2024)
Content:

Exercise correction
Code versioning
Import vs Require
Backend
HTTP requests
Notes:
N/A
Lesson 04 (08/08/2024)
Content:

HTTP review
HTTP methods
HTTP requests using CURL
Data submission flow (form -> backend)
NodeJS application setup with TS
Notes:
CURLS:
GET example:
curl http://localhost:3000/cadastro
POST example:
curl -X POST http://localhost:3000/cadastro
Lesson 05 (12/08/2024)
Content:

Express
GET method
Extracting information via Query String
Extracting information via parameter
Notes:
From scratch: a term used when developing something from the ground up.
Lesson 06 (13/08/2024)
Content:

HTTP verbs
HTTP Responses
Status Codes
Content Types
GET requests
POST requests
Postman
Collection
Notes:
Apps similar to Postman: Thunderclient, Insomnia, Postman.
Lesson 07 (15/08/2024)
Content:

Project structure with MVC
Database connection using mysql2
Listing Departments
Inserting Departments
Notes:
Study code patterns (CLEAN CODE, SOLID, MVC - Model View Controller, DRY, etc).
Request body or response body => Request payload and response payload.
SQL Injection: understand how it works to avoid security issues.
Lesson 08 (19/08/2024)
Content:

Docker overview with docker-compose
Correction of DELETE exercise
CI/CD with Vercel
Using a template
Vercel deployment file
Deploy to Vercel
Validators with Next
Lesson 09 (20/08/2024)
Content:

.env for the database
PUT/PATCH for departments
Environment configuration on Vercel
Review of Validators
Lesson 10 (22/08/2024)
Content:

Correction of the PUT exercise
Correction of the Departments by ID exercise
Implementation of employee route with departments (BFF concept)
CORS
Extras
Notes:
Code scanning tools: usually integrated into CI/CD. SonarQube (validates complexity, code smells, redundancy, etc.).
