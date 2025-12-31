<div align="center">
  <div style="display: flex; align-items: center; gap: 12px; justify-content: center;">
        <img
      width="128"
      height="128"
      alt="logo"
      src="https://github.com/user-attachments/assets/50523abe-36ba-4ec3-9a93-b765be3a66f2"
    />
    <h1 style="margin: 0;"><b>Mercury</b></h1>

  </div>
</div>

Um simples encurtador de URLs feito com "Express", "Handlebars" e "MongoDB".

<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/> 

<img width="1360" height="767" alt="Captura de tela de 2025-12-31 16-19-47" src="https://github.com/user-attachments/assets/2b23dbc4-ee85-40ba-a6c6-e4a76c26eceb" />

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
