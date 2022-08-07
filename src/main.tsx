import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'modern-css-reset/dist/reset.css'
import './index.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
