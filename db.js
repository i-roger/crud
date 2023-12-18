const mysql = require("mysql2/promise")

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectClientes() {
    const results = await client.query("select * from users;");
    return results[0];
}


// function selectClientes() {
//     return clientes;
// }

function selectCliente(id){
    return clientes.find(c => c.id === id)
}

async function insertCliente(cliente) {
    const values = [cliente.user, cliente.password];
    //Validação se cliente tem o USER igual ao USER no Banco de Dados
    await client.query("INSERT INTO users(user,password) VALUES (?,?)", values)
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