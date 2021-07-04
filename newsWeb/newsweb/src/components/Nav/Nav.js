import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.scss';


export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="MainNav">
          <div className="container">
            <ul>
              <li>
              <Link to="/home">Inicio</Link>
              </li>
              <li>
              <Link to="/form">Añadir noticia</Link>
              </li>
              <li>
              <Link to="/list">Lista de noticias</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}





