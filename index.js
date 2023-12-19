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
app.patch("/clientes/:id", async(request, response) => {
    const id = parseInt(request.params.id);
    const cliente = request.body;
    await db.updateCliente(id, cliente);
    response.sendStatus(200);
})

// Adicionar Novos Clientes
app.post("/clientes", async (request, response) => {
    const cliente = request.body;
    await db.insertCliente(cliente);
    response.sendStatus(201);
})

//Puxar Clientes
app.get("/clientes", async (request, response) => {
    const results = await db.selectClientes();
    response.json(results)
})

app.get ("/clientes/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    const results = await db.selectCliente(id)
    response.json(results);
})

app.get("/", (request, response, ) => {
    response.send() //para carregar pagina html
    response.json({
        message: "Its Alive!"
    })
})

app.listen(process.env.PORT, () => {
    console.log("App is running!")
});