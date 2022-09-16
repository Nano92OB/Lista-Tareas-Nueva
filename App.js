import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/header/header"
import Main from './components/main/main';
import SectionNosotros from './components/nosotros/nosotros';
import SectionOpportunities from './components/opportunities/opportunities';
import SectionNoticias from './components/noticias/noticias';
import SectionContacto from './components/contacto/contacto';
import Footer from './components/footer/footer';
import Modal from './components/modal/modal';
import { useState } from "react";


function App() {
  
  // Es un estado global
  const [displayModal, setDisplayModal] = useState(false)
  return (
    <React.Fragment>

        <div id="overlay"></div>
      
        <Header
          // Funcion que creo para pasarle la propiedad {setDisplayModal} al button hijo 
          setDisplayModal={setDisplayModal} >  
        </Header>

        <Modal 
          // Variable de Estado de mi aplicacion - Le paso el modal como propiedad
          setDisplayModal={setDisplayModal}
          displayModal={displayModal} > 
        </Modal>

        <Main> </Main>
        
        <SectionNosotros> </SectionNosotros>

        <SectionOpportunities> </SectionOpportunities>

        <SectionNoticias> </SectionNoticias>

        <SectionContacto> </SectionContacto>
        
        <Footer> </Footer>    

    </React.Fragment>
   );
}

export default App;
