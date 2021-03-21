import React, { Component } from "react";
import './estilo.css';

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3>Titulo</h3>
        </header>
        <p>Escreva sua anotação</p>
      </section>
    );
  }
}

export default CardNota;
