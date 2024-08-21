import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import External from './External'
// import "./assets/css/style.css"
import Inline from './InlineApp'
import Internal from './InternalApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <External /> */}
    {/* <Inline /> */}
    <Internal/>


  </StrictMode>,
)
