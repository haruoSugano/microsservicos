const express = require('express');
const app = express();
// não esquecer a funcao json() erro comum: app.use(express.json);
app.use(express.json());

// localhost:5000/lembretes/123456/observacoes
// :id pode ser o valor qualquer
app.post('/lembretes/:id/observacoes', (req, res) => {

});

//localhost:5000/lembretes/abcd/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {

});

app.listen(5000,() => {
    console.log("Observacoes listening on port 5000");
});