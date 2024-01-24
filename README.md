# Projeto Heat Node

## ✨ Tecnologias

Este projeto recria o aplicativo NLW - Heat Node, utilizando tecnologias avançadas para proporcionar uma experiência moderna e eficiente. As principais tecnologias incluídas são:

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [JSON Web Token](https://jwt.io/)
- [Socket.IO](https://socket.io/)

## 🔒 Autenticação GitHub

O projeto incorpora autenticação via GitHub, proporcionando um nível elevado de segurança e interatividade. A autenticação OAuth com o GitHub é utilizada para garantir a integridade do acesso aos recursos da aplicação.

## 🚀 Como Executar

Siga os passos abaixo para executar o projeto em sua máquina local:

1. Clone o repositório e acesse a pasta;
2. Faça uma cópia do arquivo `.env.example` para `.env` e preencha com suas credenciais do GitHub;
3. Instale as dependências utilizando o comando `npm install`;
4. Execute as migrações do banco de dados com `npx prisma migrate dev`;
5. Inicie o servidor local com `npm run dev`;

A aplicação estará disponível em [`localhost:4000`](http://localhost:4000).

## ℹ️ Informações Adicionais

Para mais detalhes sobre o projeto e seu desenvolvimento, consulte a documentação do [Node.js](https://nodejs.org/) e [Prisma](https://www.prisma.io/).
