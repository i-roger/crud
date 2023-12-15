const mysql = require("mysql2/promise")

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectClientes() {
    const results = await client.query("select * from users;");
    return results[0];
}

const clientes = [
    {
        id: 1,
        nome: "Lara",
        email: "lara@teste.com",
        celular: "99951252"
    },
    {
        id: 2,
        nome: "Sookie",
        email: "sookie@teste.com",
        celular: "99653246"
    }
];

// function selectClientes() {
//     return clientes;
// }

function selectCliente(id){
    return clientes.find(c => c.id === id)
}

function insertCliente(cliente) {
    //Validação se cliente tem ID igual ao ID dentro de Cliente[] ID++
    clientes.push(cliente);
}

// Alterar informação de algum cliente do DB
function updateCliente(id, clienteData) {
    const cliente = clientes.find(c => c.id === id);
    if(!cliente) return;
    cliente.nome = clienteData.nome;
    cliente.email = clienteData.email;
    cliente.celular = clienteData.celular;
}

function deleteCliente(id) {
    const index = clientes.findIndex(c => c.id === id);
    clientes.splice(index, 1)

}

module.exports = {
    selectClientes,
    selectCliente,
    insertCliente,
    updateCliente,
    deleteCliente,
}