import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import './assets/index.css';
import './index.css';

class App extends Component {
  constructor(){
    super();
    // this.notas = [];
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto) {
    // console.log("Nota criada " + titulo + " " + texto);
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    // this.notas.push(novaNota);
    this.setState(novoEstado);
  }

  render() {
    // console.log("render");
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
