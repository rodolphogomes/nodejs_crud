//config inicial
require('dotenv').config()
const express = require("express"); //chamando o express
const mongoose = require("mongoose");
const app = express(); //inicializando o express


const Person = require("./models/Person"); //importando/acessando o models

//forma de ler o json / executar middlewares
app.use(
  //criando o middleware
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//rotas de API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inicial(rotas de endpoint)
app.get("/", (req, res) => {
  //criando um rota (endpoint)

  //mostrar requisição

  res.json({ message: "Oi express! " }); //criando uma chave chamada express com msg
});

//entregar uma porta / conectando no banco de dados
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.set("strictQuery", true); //nova configuração mongoose

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.85bhh33.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    //conectado com sucesso
    console.log("Conectado com o MongoDB!");
    app.listen(3000); //disponibilizando o express na porta 3000
  })
  .catch((err) => console.log(err)); //Quando há erro e desejo exibi-lo;
