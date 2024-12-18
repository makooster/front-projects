import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import creationServer from'./server.js'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

creationServer();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
