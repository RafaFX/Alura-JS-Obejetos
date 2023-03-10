const cliente = {
    nome: 'Joao',
    idade: 22,
    email:'joao@gmail.com',
    telefone: ['11 55555529', '11 324314155']
};

// cliente.enderecos = [{
//     rua: 'Avenida Rolf',
//     numero: 32,
//     bairro: 'Centro',
//     apartamento: true,
// }];


const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error('Erro precisa de endereco')
}

