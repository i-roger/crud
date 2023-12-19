const mysql = require("mysql2/promise")

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectClientes() {
    const results = await client.query("select * from users;");
    return results[0];
}

async function selectCliente(id){
    const value = [id]
    const results = await client.query("select user, password from users WHERE id=?", value)
    return results[0];
}

async function insertCliente(cliente) {
    const values = [cliente.user, cliente.password];
    //Validação se cliente tem o USER igual ao USER no Banco de Dados
    await client.query("INSERT INTO users(user,password) VALUES (?,?)", values)
}

// Alterar informação de algum cliente do DB
async function updateCliente(id, cliente) {
    const values = [cliente.user, cliente.password, id]
    await client.query("UPDATE users SET user=?, password=? WHERE id=?", values)

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