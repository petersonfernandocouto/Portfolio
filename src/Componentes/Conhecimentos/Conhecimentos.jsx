import './App.scss';
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

function Conhecimentos() {

    const { ConhecimentoAtual, alterarConhecimento } = useContext(Contexto);

    return (


        <div className='Conhecimento'>
            
            <div className='Exibicao'>

                <h1>Conhecimento</h1>
                <p>{ConhecimentoAtual.Descricao}</p>

            </div>

            <div className='ButtonIco'>

                <div className='LinhaIco'>

                    <button onMouseOver={() => alterarConhecimento(2)} onMouseOut={() => alterarConhecimento(1)}> <FaHtml5 /> </button>
                    <button onMouseOver={() => alterarConhecimento(3)} onMouseOut={() => alterarConhecimento(1)}> <FaCss3Alt /> </button>
                    <button onMouseOver={() => alterarConhecimento(4)} onMouseOut={() => alterarConhecimento(1)}> <FaSquareJs /> </button>

                </div>


                <div className='LinhaIco'>
                    <button onMouseOver={() => alterarConhecimento(5)} onMouseOut={() => alterarConhecimento(1)}> <FaReact /> </button>
                    <button onMouseOver={() => alterarConhecimento(6)} onMouseOut={() => alterarConhecimento(1)}> <RiNextjsFill /> </button>
                    <button onMouseOver={() => alterarConhecimento(7)} onMouseOut={() => alterarConhecimento(1)}> <SiTypescript /> </button>
                </div>

                <div className='LinhaIco'>
                    <button onMouseOver={() => alterarConhecimento(8)} onMouseOut={() => alterarConhecimento(1)}> <RiVuejsFill /> </button>
                    <button onMouseOver={() => alterarConhecimento(9)} onMouseOut={() => alterarConhecimento(1)}> <FaSass /> </button>
                    <button onMouseOver={() => alterarConhecimento(10)} onMouseOut={() => alterarConhecimento(1)}> <DiNodejs /> </button>
                </div>
                



            </div>
        </div>
    )
}


export default Conhecimentos