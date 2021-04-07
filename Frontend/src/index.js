import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/Registro.css'
import './styles/info.css'
import './styles/formulario.css'
import './components/formularios/basico.css'
import './components/formularios/intermedio.css'
import './components/formularios/avanzado.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
