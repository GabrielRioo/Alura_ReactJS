class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();

cliente1.nome = "Gabriel";
cliente1.cpf = 11122233344;
cliente1.agencia = 1001;
cliente1.saldo = 0;


const cliente2 = new Cliente();

cliente2.nome = "Camila";
cliente2.cpf = 22233344455;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, "\n", cliente2);