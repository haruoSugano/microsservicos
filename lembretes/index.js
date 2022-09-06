const express = require("express");
const app = express();

// Estamos aplicando o middleware
// const podeAcessar = () {}
// app.use(podeAcessar)
// uma altenticaçao antes de executar o post, get...
app.use(express.json());

const lembretes = {};
let contador = 0;

// GET obter a lista de lembretes
// localhost:4000/lembretes
app.get("/lembretes", (req, res) => {
  console.log("Requisicao Get...");
  res.send(lembretes);
});

// POST cadastrar um lembrete novo
// localhost:4000/lembretes
// {texto: "fazer cafe"}
app.post("/lembretes", (req, res) => {
  contador++;
  //const texto = req.body.texto;
  // Destruturacao
  const { texto } = req.body;
  lembretes[contador] = {
    contador: contador, // ou contador
    texto: texto, // ou texto
  };
  console.log("Requisicao POST");
  res.status(201).end(); // status 201 procolo criada
});

app.listen(4000, () => {
  console.log("Lembretes. Porta 4000");
});
