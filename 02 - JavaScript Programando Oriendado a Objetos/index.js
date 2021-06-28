class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`Sacado: ${contaCorrenteGabriel.saldo}`);
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depositado: ${contaCorrenteGabriel.saldo}`);
    }
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Gabriel";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Camila";
cliente2.cpf = 22233344455;

const contaCorrenteGabriel = new ContaCorrente();
contaCorrenteGabriel.agencia = 1001;
contaCorrenteGabriel.saldo = 0;
console.log("Saldo Inicial: ", contaCorrenteGabriel.saldo);

contaCorrenteGabriel.depositar(1000);

contaCorrenteGabriel.sacar(1001);

console.log(`Saldo Atual ${contaCorrenteGabriel.saldo}`);
