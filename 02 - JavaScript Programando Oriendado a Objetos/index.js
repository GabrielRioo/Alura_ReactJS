

class ContaCorrente {
  agencia;
  //#saldo = 0
  _saldo = 0;

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      console.log(`Sacado: ${contaCorrenteGabriel._saldo}`);
    }
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      console.log(`Depositado: ${contaCorrenteGabriel._saldo}`);
      console.log(this._saldo);
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
contaCorrenteGabriel._saldo = 10;
console.log("Saldo Inicial: ", contaCorrenteGabriel.saldo);

contaCorrenteGabriel.depositar(1000);

contaCorrenteGabriel.sacar(1001);

console.log(`Saldo Atual ${contaCorrenteGabriel.saldo}`);
console.log(contaCorrenteGabriel);
