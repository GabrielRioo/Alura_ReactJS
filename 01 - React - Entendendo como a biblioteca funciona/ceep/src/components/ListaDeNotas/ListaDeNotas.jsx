import React, { Component } from "react";
import CardNota from "../CardNota";
import './estilo.css';

class ListaDeNotas extends Component {
  

  render() {
    return (
      <ul className="lista-notas">
        {/* {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => { */}
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota titulo={nota.titulo} texto={nota.texto}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
