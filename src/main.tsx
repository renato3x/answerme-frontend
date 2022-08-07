import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/modern-css-reset/dist/reset.min.css'
import './index.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
