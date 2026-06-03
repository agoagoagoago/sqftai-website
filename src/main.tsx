import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted Inter (no external network request / tracking).
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'

import './styles/tokens.css'
import './styles/global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
