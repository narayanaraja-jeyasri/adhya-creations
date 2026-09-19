import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    <Toaster position="bottom-right" toastOptions={{
      style: {
        background: '#111111',
        color: '#fff',
        border: '1px solid rgba(245, 184, 0, 0.3)',
      },
    }} />
    
  </React.StrictMode>,
)
