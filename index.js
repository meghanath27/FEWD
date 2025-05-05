// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // This is for React 18 and above
import './index.css'; // Global styles
import App from './App'; // Import the main App component

// Creating the root and rendering the App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
