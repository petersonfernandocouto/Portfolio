import './App.scss'
import Menu from './Componentes/Menu/Menu'
import Infor from './Componentes/Informacoes/Info'
import EU from './Componentes/QmSouEu/EU'
import Provider from './Contexto/Provider'
import Experiencias from './Componentes/Experiencia/Expe'

function Home() {
  

  return (
    <>

        <Menu />

          <br />

        <Infor />


        <EU />

          <Provider>


                <Experiencias />

          </Provider>
        
    </>
  )
}

export default Home
