import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'modern-css-reset/dist/reset.css'
import './index.css'
import 'material-design-lite/dist/material.min'
import '../node_modules/material-design-lite/dist/material.purple-green.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
