import React, { Component } from "react";
import "./Home.scss";
/* import { Link } from 'react-router-dom'; */
import { userContext } from "../../context/userContext";


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
      
    };
   }
//vida del componente
   componentDidUpdate(prevProps, prevState) {
     console.log("cambio hecho")
     console.log(prevProps)
     console.log(prevState)
     
   }
   





//listener
  handleChange = event => {
    this.setState({ name: event.target.value });
  }



  handleSubmit = (event) => {
    event.preventDefault();
  }


  
  sendConfirm= () => this.state.register &&  this.state.register.user.name?
                  <h2>Bienvenido, {this.state.register.user.name}</h2>:"";



  render() {
    return (
      <div className="inputHome">
        <h1>Bienvenido a la web </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <userContext.Consumer>
            {({loginUser}) => <button type="submit" onClick= { () => loginUser(this.state.name)}>Add</button>}
          
          </userContext.Consumer>
        </form>
        <p>Bienvenido: {this.state.name || ".." }</p>
        {this.sendConfirm()}
        
        {/* <h2>Gracias, {this.state.register?this.state.register.user.name: ''}. Nos pondremos en contacto contigo</h2> */}
      </div>
    )
  }
}

export default Home;

