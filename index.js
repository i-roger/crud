require("dotenv").config();

const db = require("./db")

const express = require ("express");

const app = express();

app.use(express.json()); //Configuração de body parser

app.post("/clientes", (request, response) => {
    const cliente = request.body;
    db.insertCliente(cliente);
    response.sendStatus(201);
})

app.get ("/clientes", (request, response) => {
    response.json(db.selectClientes());
})

app.get ("/clientes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    response.json(db.selectCliente(id));
})

app.get("/", (request, response, ) => {
    response.json({
        message: "Its Alive!"
    })
})

app.listen(process.env.PORT, () => {
    console.log("App is running!")
});