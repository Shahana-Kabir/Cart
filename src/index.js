import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context';
ReactDOM.render(
  <React.StrictMode>
      <App />
    {/* <AppProvider>
    
    </AppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
