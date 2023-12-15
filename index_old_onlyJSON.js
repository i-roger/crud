/* Arquivo usado no inicio do desenvolvimento para testar as conexões, e os 
verbos HTTP com POSTMAN , após isso fiz as modificações necessárias no
arquivo "index.js" para conectar ao banco de dados no MYSQL WORKBENCH*/

require("dotenv").config();

const db = require("./db")

const express = require ("express");

const app = express();

/*Configuração de body parser, quando os dados são trafegados Bit a bit
Transformam-se em .json ao chegar no destino*/
app.use(express.json());

//Excluir Clientes pelo ID
app.delete("/clientes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    db.deleteCliente(id);
    response.sendStatus(204);
})

// Para alterar Informações de clientes
app.patch("/clientes/:id", (request, response) => {
    const id = parseInt(request.params.id);
    const cliente = request.body;
    db.updateCliente(id, cliente);
    response.sendStatus(200);
})

// Adicionar Novos Clientes
app.post("/clientes", (request, response) => {
    const cliente = request.body;
    db.insertCliente(cliente);
    response.sendStatus(201);
})

//Puxar Clientes
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