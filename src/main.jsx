import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='575429253311-l96bq8kmaavhkf53960o3oqdq7h4kekd.apps.googleusercontent.com'>
      <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
   
  </StrictMode>,
)
