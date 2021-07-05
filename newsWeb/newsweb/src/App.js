import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import {userContext} from './context/userContext';
import Head from './components/Head/Head';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'; 
import './App.scss';


//function App() {
  export class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        user: {
          name:"Antonio"
        }
      }
    }
    
    logout = () => this.setState({user: {}});
    login = (name) => this.setState({user:{name}});
    
  
    render() {
      const value = {
        user: this.state.user,
        logoutUser: this.logout,
        loginUser: this.login
      }
  
  return (
    <div className="App">
      <BrowserRouter>
      <userContext.Provider value={value}>
      <Head/>
      <Main/>
      </userContext.Provider>
      </BrowserRouter>
      <Footer/>     
    </div>
  )
}
  }

export default App;
