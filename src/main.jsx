import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './providers/AuthProvider'
import { TechProvider } from './providers/TechProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TechProvider>
          <App />
        </TechProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
