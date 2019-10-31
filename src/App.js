import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponenteTeste from './ComponenteTeste';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { showComponent: false };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState((state) => ({ 
      showComponent: !state.showComponent 
    }));
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <input type="button" value={ this.state.showComponent ? "Esconder componente" : "Mostrar componente" } onClick={this.onClick} />
          { this.state.showComponent ? <ComponenteTeste teste={this.state.showComponent} /> : null }

        </header>
      </div>
    );
  }
}

export default App;
