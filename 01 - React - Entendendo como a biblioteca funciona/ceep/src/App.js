import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import './assets/index.css';
import './index.css';

class App extends Component {
  constructor(){
    this.notas = [];
  }

  criarNota(titulo, texto) {
    console.log("Nota criada " + titulo + " " + texto);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas notas={this.notas}/>
      </section>
    );
  }
}

export default App;
