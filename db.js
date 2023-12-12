const clientes = [{
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
}];

function selectClientes() {
    return clientes;
}

function selectCliente(id){
    return clientes.find(c => c.id === id)
}

function insertCliente() {
    clientes.push(cliente);

}

module.exports = {
    selectClientes,
    selectCliente,
    insertCliente
}