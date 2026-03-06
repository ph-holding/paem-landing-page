import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if (import.meta.env.PROD) {
  // Defer SW registration to after load so workbox is not on the critical path (shortens chain for LCP)
  const registerPWA = () => {
    import('virtual:pwa-register').then(({ registerSW }) =>
      registerSW({ immediate: true })
    )
  }
  if (document.readyState === 'complete') {
    registerPWA()
  } else {
    window.addEventListener('load', registerPWA)
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
