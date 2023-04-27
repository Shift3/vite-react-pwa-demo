import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReloadPrompt from './ReloadPrompt/ReloadPrompt'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ReloadPrompt />
  </React.StrictMode>,
)
