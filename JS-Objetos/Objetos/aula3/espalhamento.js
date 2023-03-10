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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

ligaParaCliente(...cliente.telefone);


// const encomenda = {
//     destinatario: cliente.nome,
//     rua: cliente.enderecos[0].rua,
//     numero: cliente.enderecos[0].numero,
// }


const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda)