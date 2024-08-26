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

function Conhecimentos() {


    return (


        <div className='Conhecimento'>
            
            <div className='Exibicao'>

                <h1>Conhecimento</h1>
                <p>Passe o mouse em cima para ler</p>

            </div>

            <div className='ButtonIco'>

                <div className='LinhaIco'>

                    <button> <FaHtml5 /> </button>
                    <button> <FaCss3Alt /> </button>
                    <button> <FaSquareJs /> </button>

                </div>


                <div className='LinhaIco'>
                    <button> <FaReact /> </button>
                    <button> <RiNextjsFill /> </button>
                    <button> <SiTypescript /> </button>
                </div>

                <div className='LinhaIco'>
                    <button> <RiVuejsFill /> </button>
                    <button> <FaSass /> </button>
                    <button> <DiNodejs /> </button>
                </div>
                



            </div>
        </div>
    )
}


export default Conhecimentos