import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SearchProvider } from './contexts/searchContext'
import { MovieContextProvider } from './contexts/moviesContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <MovieContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MovieContextProvider>
  </SearchProvider>,
)
