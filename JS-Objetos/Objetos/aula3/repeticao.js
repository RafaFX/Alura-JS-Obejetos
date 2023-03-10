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

for (let chave in cliente){

    let tipo = typeof(cliente[chave]);
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
    
}