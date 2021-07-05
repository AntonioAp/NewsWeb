
import React, { Component } from 'react';
import './Home.scss';


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
      <div class="inputForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
            <button>Add</button>      
        </form>
        <p>Usuari@ introducid@: {this.state.name || ".." }</p>
        {this.sendConfirm()}
        
        {/* <h2>Gracias, {this.state.register?this.state.register.user.name: ''}. Nos pondremos en contacto contigo</h2> */}
      </div>
    )
  }
}


export default Home;
