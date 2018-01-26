import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainLayout from './components/mainLayout';
import './App.css';

class App extends Component {  
  render() {
    return (              
        <div className="page">
          <BrowserRouter>
            <div>     
              <Switch>            
                <Route path="/home" component= {MainLayout} />
                <Route exact path="/" render = {() => <Redirect to="/home"/>} />
                <Route render = {() => <h1> 404 Page Not Found! </h1>} />
              </Switch>
            </div>     
          </BrowserRouter> 
        </div>            
    );
  }
}

export default App;
