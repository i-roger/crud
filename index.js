require("dotenv").config();

const db = require("./db")

const express = require ("express");

const app = express();

app.get ("/clientes", (request, response) => {
    response.json(db.selectClientes());
})

app.get("/", (request, response, ) => {
    response.json({
        message: "Its Alive!"
    })
})

app.listen(process.env.PORT, () => {
    console.log("App is running!")
});