import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavbarApp from './components/navbar/navbar';
import './index.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ModalApp from './components/modal/ModalApp';
import ContainerApp from './components/container/Container';
import CardApp from './components/card/CardApp';



createRoot(document.getElementById('root')).render(
  <StrictMode>

 <NavbarApp/>
 <ModalApp/>
 <ContainerApp/>
  <CardApp/>
  </StrictMode>,
)
