const cliente = {
    nome: 'Joao',
    idade: 22,
    email:'joao@gmail.com',
    telefone: ['11 55555529', '11 324314155'],
    saldo: 200,
    efetuaPagamento: function (valor){
        if (valor > this.saldo ) {
            console.log('saldo insuficiente');
        }
        else{
            this.saldo -= valor;
            console.log(`Pagamento aprovado, nova saldo : ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(25);

