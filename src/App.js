import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'
import Comunidades from './pages/comunidades.js'
import Productos from './pages/productos.js'
import Personas from './pages/personas.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import newComunidad from './component/newComunidad';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    }
  }
  componentDidMount() {
  
  }
  /*
        <Router className="App">
        <Switch>  
          <Route path="/productos">
            <Productos />
          </Route>  
          <Route path="/comunidades">
            <Comunidades />
          </Route>
          <Route exact path="/">
            <Comunidades />
          </Route>   
        </Switch>      
      </Router>

              <Route path="/productos">
          <Productos />
        </Route> 
  */ 
  render() {
    return (
      <Router className="App">
      <Switch>  
 
        <Route path="/comunidades">
          <Comunidades />
        </Route>
        <Route path="/productos">
          <Productos />
        </Route>
        <Route exact path="/">
          <div>hola</div>
        </Route>   
      </Switch>      
      </Router>
    )
  }
}

export default App

