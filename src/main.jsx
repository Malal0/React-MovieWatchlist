import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SearchProvider } from './SearchProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SearchProvider>,
)
