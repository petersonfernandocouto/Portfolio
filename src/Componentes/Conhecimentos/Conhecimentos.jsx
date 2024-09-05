import './App.scss';
import '../../MediaQueries/conhecimentos.scss'
import { FaHtml5 } from "react-icons/fa"; //HTML
import { FaCss3Alt } from "react-icons/fa"; // CSS
import { FaSquareJs } from "react-icons/fa6"; // JS
import { FaReact } from "react-icons/fa"; // React
import { FaSass } from "react-icons/fa"; //Sass
import { DiNodejs } from "react-icons/di"; //Node js
import { RiNextjsFill } from "react-icons/ri"; //Next js
import { SiTypescript } from "react-icons/si"; //Typescript
import { RiVuejsFill } from "react-icons/ri"; //Vue
import { useContext } from 'react';
import Contexto from '../../Contexto/Context';
import { useInView } from 'react-intersection-observer';

function Conhecimentos() {

    const { ConhecimentoAtual, alterarConhecimento } = useContext(Contexto);

    const { ref: htmlRef, inView: htmlInView } = useInView({ triggerOnce: true }); //Atenção! Codigo explicado em Home.jsx
    const { ref: CSSRef, inView: CSSInView } = useInView({ triggerOnce: true });
    const { ref: JSRef, inView: JSInView } = useInView({ triggerOnce: true });

    const { ref: ReactRef, inView: ReactInView } = useInView({ triggerOnce: true });
    const { ref: NextRef, inView: NextInView } = useInView({ triggerOnce: true });
    const { ref: TypescriptRef, inView: TypescriptInView } = useInView({ triggerOnce: true });

    const { ref: VueRef, inView: VueInView } = useInView({ triggerOnce: true });
    const { ref: SassRef, inView: SassInView } = useInView({ triggerOnce: true });
    const { ref: NodeRef, inView: NodeInView } = useInView({ triggerOnce: true });


    return (


        <div className='Conhecimento'>
            
            <div className='Exibicao'>

                <h1>Conhecimento</h1>
                <p>{ConhecimentoAtual.Descricao}</p>

            </div>

            <div className='ButtonIco'>

                <div className='LinhaIco'>

                    <button  
                    
                       ref={htmlRef}  className={`section ${htmlInView ? 'fadeInLeft' : 'fromLeft'}`}
                       onMouseOver={() => alterarConhecimento(2)} onMouseOut={() => alterarConhecimento(1)}> 

                        <FaHtml5 />

                    </button>



                    <button 

                       ref={CSSRef}  className={`section ${CSSInView ? 'fadeInLeft2' : 'fromLeft'}`} 
                       onMouseOver={() => alterarConhecimento(3)} onMouseOut={() => alterarConhecimento(1)}> 

                        <FaCss3Alt /> 

                    </button>


                    <button 
                    
                    ref={JSRef}  className={`section ${JSInView ? 'fadeInLeft3' : 'fromLeft'}`}
                    onMouseOver={() => alterarConhecimento(4)} onMouseOut={() => alterarConhecimento(1)}> 
                        
                        <FaSquareJs /> 
                        
                    </button>




                </div>


                <div className='LinhaIco'>

                    <button 

                        ref={ReactRef}  className={`section ${ReactInView ? 'fadeInLeft4' : 'fromLeft'}`}
                        onMouseOver={() => alterarConhecimento(5)} onMouseOut={() => alterarConhecimento(1)}> 
                    
                           <FaReact />

                    </button>


                    <button 
                        
                        ref={NextRef}  className={`section ${NextInView ? 'fadeInLeft5' : 'fromLeft'}`}
                        onMouseOver={() => alterarConhecimento(6)} onMouseOut={() => alterarConhecimento(1)}> 
                        
                            <RiNextjsFill /> 
                    
                    </button>


                    <button 

                        ref={TypescriptRef}  className={`section ${TypescriptInView ? 'fadeInLeft6' : 'fromLeft'}`}
                        onMouseOver={() => alterarConhecimento(7)} onMouseOut={() => alterarConhecimento(1)}> 
                            
                            <SiTypescript /> 
                    
                    </button>


                </div>

                <div className='LinhaIco'>

                    <button 

                        ref={VueRef}  className={`section ${VueInView ? 'fadeInLeft7' : 'fromLeft'}`}
                        onMouseOver={() => alterarConhecimento(8)} onMouseOut={() => alterarConhecimento(1)}> 

                            <RiVuejsFill /> 
                    
                    </button>


                    <button 

                        ref={SassRef}  className={`section ${SassInView ? 'fadeInLeft8' : 'fromLeft'}`}
                        onMouseOver={() => alterarConhecimento(9)} onMouseOut={() => alterarConhecimento(1)}> 
                        
                            <FaSass /> 
                            
                    </button>

                    <button 

                        ref={NodeRef}  className={`section ${NodeInView ? 'fadeInLeft9' : 'fromLeft'}`}
                        onMouseOver={() => alterarConhecimento(10)} onMouseOut={() => alterarConhecimento(1)}> 
                        
                            <DiNodejs />

                    </button>

                </div>
                



            </div>
        </div>
    )
}


export default Conhecimentos