const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o App
const app = express();

//Permitir que eu envie dados para minah api no formato Json
app.use(express.json());

app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb+srv://augusto:guv9014@omnistack-cebkf.mongodb.net/nodeapi?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);