import './App.scss';
import Menu from './Componentes/Menu/Menu';
import Infor from './Componentes/Informacoes/Info';
import EU from './Componentes/QmSouEu/EU';
import Provider from './Contexto/Provider';
import Experiencias from './Componentes/Experiencia/Expe';
import Conhecimentos from './Componentes/Conhecimentos/Conhecimentos';
import Certificado from './Componentes/Certificados/Certificado';
import Projetos from './Componentes/Projetos/Projetos';
import Footer from './Componentes/Footer/Footer';
import { useInView } from 'react-intersection-observer'; //hook usado para detectar se um elemento entra ou sai da área visível da tela

// ref: É uma referência que você atribui ao elemento que deseja monitorar.
//inView: É um booleano que indica se o elemento está visível na tela (true) ou não (false).
//triggerOnce: Essa opção faz com que o hook dispare apenas uma vez quando o elemento entra na tela, ou seja, a animação acontece apenas na primeira vez que o elemento fica visível.

function Home() {
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true });
  const { ref: euRef, inView: euInView } = useInView({ triggerOnce: false });
  const { ref: experienciasRef, inView: experienciasInView } = useInView({ triggerOnce: true });
  const { ref: conhecimentosRef, inView: conhecimentosInView } = useInView({ triggerOnce: true });
  const { ref: conquistasRef, inView: conquistasInView } = useInView({ triggerOnce: true });
  const { ref: projetosRef, inView: projetosInView } = useInView({ triggerOnce: true });

  return (
    <>
      <Menu />

      <br />

      <div ref={infoRef} className={`section ${infoInView ? 'fadeIn' : ''}`}>
        {/*Se infoInView for true (ou seja, o elemento está visível), a classe 'fadeIn'(que está no SCSS deste documento) será executada, caso for false ( : " " ) nada será feito */}

        <Infor />


      </div>

      <div ref={euRef} className={`section ${euInView ? 'fadeInLeft' : 'fromLeft'}`}>
      {/*Neste caso temos duas classes, se o euInView for trues a classe fadeInLeft será executada, ou ( : ) false o que será executado será fromLeft  */}

        <EU />


      </div>

      <Provider>

        <div ref={experienciasRef} className={`section ${experienciasInView ? 'fadeIn' : ''}`}>

          <Experiencias />
          
        </div>

        <br />

        <div ref={conhecimentosRef} className={`section ${conhecimentosInView ? 'fadeIn' : ''}`}>

          <Conhecimentos />

        </div>

      </Provider>

      <br />

      <div ref={conquistasRef} className={`section ${conquistasInView ? 'fadeIn' : ''}`}>
        <Certificado />
      </div>

      <div ref={projetosRef} className={`section ${projetosInView ? 'fadeIn' : ''}`}>
        <Projetos />
      </div>

      <br />

      <Footer />
    </>
  );
}

export default Home;
