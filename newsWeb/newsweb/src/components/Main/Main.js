import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home';
import Form from '../../pages/Form';
import List from '../../pages/List'
import './Main.scss';

export default class Main extends Component {
  render() {
      return (
          <main className='main'>
              <div className="wrapper">
                  <p>Esto es MAIN</p>
                  <Switch>
                      <Route path="/home" component={Home} exact />
                      <Route path="/form" component={Form} />
                      <Route path="/list" component={List} />
                  </Switch>
              </div>
          </main>
      )
  }
}

