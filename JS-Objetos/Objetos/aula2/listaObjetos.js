const cliente = {
    nome: 'Joao',
    idade: 22,
    email:'joao@gmail.com',
    telefone: ['11 55555529', '11 324314155']
};

cliente.enderecos = [{
    rua: 'Avenida Rolf',
    numero: 32,
    bairro: 'Centro',
    apartamento: true,
}];

cliente.enderecos.push({
    rua: 'Nereu Ramos',
    numero: 76,
    bairro: 'Bom Retiro',
    apartamento: false,
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (enderecos) => enderecos.apartamento === true
);

console.log(cliente.enderecos);
console.log(listaApenasApartamentos);