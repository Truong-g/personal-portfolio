import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import GlobalState from './GlobalStatesComponent/GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalState>
      <Router>
        <App />
      </Router>
    </GlobalState>
  </React.StrictMode>
);

