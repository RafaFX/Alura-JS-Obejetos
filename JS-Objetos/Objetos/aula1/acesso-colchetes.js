const cliente = {
    nome: "Rafa",
    idade: 32,
    cpf: "79035487644",
    email: "rlima@softexpert.com"
}

console.log(`O nome do cliente é ${cliente['nome']} e essa pessoa tem ${cliente[idade]} anos`);

//para acessar as chaves caso eu n saiba o nome delas e nem o valor

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach( (chave) =>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
})




