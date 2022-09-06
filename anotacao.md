# Microsserviços

Realizar a instalaçao nas duas pastas lembretes e observacoes

## express
* Utilizar em requisicao http.

```shell
npm install express
```

## nodemon
* Dependencia somente em desenvolvimento;
* Monitorar o desenvolvimento.

```shell
npm install nodemon -D
```
## Executando o nodemon

* Na pasta lembretes, adicionar um trecho do código
```json
"scripts": {
    "start": "nodemon index.js"
  }
```

No terminal, execute:
```shell
    npm start
```

## Na ferramento Postman

* Colocar a rota: http://localhost:4000/lembreteshttp://localhost:4000/lembretes