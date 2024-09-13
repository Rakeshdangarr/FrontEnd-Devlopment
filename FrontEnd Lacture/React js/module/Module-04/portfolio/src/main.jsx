import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout'
import './assets/css/style.css'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Layout/>



  </StrictMode>,
)
