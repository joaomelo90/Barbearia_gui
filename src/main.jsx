import React from 'react'
import ReactDOM from 'react-dom/client'
import MyStylesGlonal from './styles/globalStyles'
import App from './App'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyStylesGlonal/>
    <App />
  </React.StrictMode>,
)
