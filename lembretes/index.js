const express = require("express");
const app = express();
const axios = require('axios');
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
app.post("/lembretes", async (req, res) => {
  contador++;
  //const texto = req.body.texto;
  // Destruturacao
  const { texto } = req.body;
  lembretes[contador] = {
    contador: contador, // ou contador
    texto: texto, // ou texto
  };

  await axios.post("http://localhost:6000/eventos", {
    tipo: "Lembrete criado",
    dados: {
      contador,
      texto
    },
  });

  res.status(201).send(lembretes[contador]); // status 201 procolo criada
});

app.post('/eventos', (req, res) => {
  console.log(req.body);
  res.status(200).send({ msg: 'Ok' });
});

app.listen(4000, () => {
  console.log("Lembretes. Porta 4000");
});
