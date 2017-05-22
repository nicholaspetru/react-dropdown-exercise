import React, { Component } from 'react';
import Submenu from './submenu';
import MENU from './dropdown_menu'

class App extends Component {
  render() {
    return <Submenu menu={ MENU } />
  }
}

export default App;
