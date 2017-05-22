import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './stylesheets/dropdown_menu.css'

ReactDOM.render(
  <App />,
  document.getElementById('dropdown_container')
);
registerServiceWorker();
