console.log('Iniciando servidor...');

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/sua-rota', (req, res) => {
    res.send('Você acessou a rota /sua-rota!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


