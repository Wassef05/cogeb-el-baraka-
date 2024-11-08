import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Components/i18n/i18n.js'; // Initialisation de i18next


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
