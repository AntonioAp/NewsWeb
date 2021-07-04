import React, { Component } from "react";
import "./Form.scss";


class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      title: "",
      content: "",
    };
  }

  handleChange = (event) => {
    let newState = Object.assign(this.state, {
      [event.target.id]: event.target.value,
    });
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };



  render() {
    return (
      <div className="wrapper">
        <h1>Formulario para crear una noticia</h1>
        
        <form onSubmit={this.handleSubmit}>

              <label htmlFor="autor">Autor:</label>
              <input
                type="text"
                name="name"
                id="autor"
                onChange={this.handleChange}
              />

              <label htmlFor="titulo">Titular:</label>
              <input
                id="titulo"
                type="text"
                name="title"
                onChange={this.handleChange}
              />

              <label htmlFor="contenido">Contenido:</label>
              <textarea
                name="contenido"
                cols="40"
                rows="5"
                onChange={this.handleChange}
              ></textarea>
    

              <button type="submit">
                Enviar
              </button>


        </form>


    </div>
      
    );
  }
}

export default Form;
