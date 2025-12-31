# Mercury

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/> 


> Um simples encurtador de URLs feito com "Express", "Handlebars" e "MongoDB".

## 📌 Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Handlebars
- MongoDB
- Docker & Docker Compose

## 💻 Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Git
### Executando pelo node
- Node.js
- MongoDB

### Executando pelo docker
- Docker
- Docker compose | Docker compose 2v


## ▶️ Como executar o projeto

Clone o repositório:

```
git clone https://github.com/diegoarauj0/mercury.git
cd mercury
```

Executando localmente (Node.js)

```
npm install
npm run build
npm start
```

Executando com Docker Compose

```
docker compose up
```

> 💡 Não é necessário ter o MongoDB instalado localmente ao usar Docker.

## ⚙️ Configuração do ambiente (.env)

Você pode criar um arquivo .env na raiz do projeto para sobrescrever os valores padrão.

Variáveis disponíveis:

```
PORT=3000
MONGODB=mongodb://localhost:27017/mercury
STARTING_NUMBER=14000000
```

## 📄 Licença

Este projeto é open-source e está disponível sob a licença MIT.
