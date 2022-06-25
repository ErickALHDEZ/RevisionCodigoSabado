import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/Contenedor';

  WebFont.load({
    google: {
      families: ['Work Sans: 400,500,700', 'sans-Serif']
    }
  });


const Index = () => {
  return (
    <Contenedor>
      <App />
    </Contenedor>
    
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));


