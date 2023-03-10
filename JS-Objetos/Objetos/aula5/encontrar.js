const clientes = require("./clientes.json");

function encontrar(list, key, value){
    return list.find((item) => item[key].includes(value));
}

const encontrado = encontrar(clientes, "nome", "Kirby");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado2);