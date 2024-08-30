import './App.scss'
import Menu from './Componentes/Menu/Menu'
import Infor from './Componentes/Informacoes/Info'
import EU from './Componentes/QmSouEu/EU'
import Provider from './Contexto/Provider'
import Experiencias from './Componentes/Experiencia/Expe'
import Conhecimentos from './Componentes/Conhecimentos/Conhecimentos'
import Certificado from './Componentes/Certificados/Certificado'
import Projetos from './Componentes/Projetos/Projetos'

function Home() {
  

  return (
    <>

        <Menu />

          <br />

        <Infor />


        <EU />

          <Provider>


                <Experiencias />

                <br />
                
                <Conhecimentos />

          </Provider>
          
          <br />

        <Certificado />  

        <Projetos />
        
    </>
  )
}

export default Home
