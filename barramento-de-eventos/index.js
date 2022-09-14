const express = require('express');
//para enviar eventos para os demais microsservicos
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/eventos', (req, res) => {
    const evento = req.body;
    //envia o evento para o microsservico de lembretes
    axios.post('http://localhost:4000/eventos', evento);
    //envia o evento para o microsservico de observacoes
    axios.post('http://localhost:5000/eventos', evento);

    return res.status(200).send({ msg: 'Ok' });
});

app.listen(6000, () => {
    console.log('Barramento de eventos. Porta: 6000');
});