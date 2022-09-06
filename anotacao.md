# Microsserviços Intro

## Configurando ambiente

Realizar a instalaçao nas duas pastas lembretes e observacoes

## express
* Utilizar em requisicao http.

```shell
npm install express
```

## nodemon
* instalar como dependencia somente em desenvolvimento;
* Monitorar o desenvolvimento.

```shell
npm install nodemon -D
```
## Executando o nodemon

* Na pasta lembretes e observacoes, abra o arquivo `package.json` adicionar um trecho de código:
```json
  "start": "nodemon index.js"
```
* Ficando assim:
```json
"scripts": {
    "start": "nodemon index.js"
  }
```