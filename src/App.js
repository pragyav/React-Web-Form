import React, { Component } from 'react';
import InfoForm from './components/info-form';
import SkillsForm from './components/skills-form'
import PortfolioForm from './components/portfolio-form'
import './App.css';

class App extends Component {  
  render() {
    return (       
        <div className="page">
            <div className="header">
              <h2>Let's talk</h2>
              <p>Think you have what it takes? Show us.</p>
            </div>
           <InfoForm  />   
           <SkillsForm />
           <PortfolioForm />      
        </div>     
      );
  }
}

export default App;
