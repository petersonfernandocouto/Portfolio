import './index.scss';
import EuP from '../../../public/IMG/EuP.jpg'
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function EU() {



    return (

        <div className='QuemSou'>
        
            <div className='ImgEDescricao'>

                    <div className='imagem'>

                        <img src={EuP} className='EuP'/>
                        
                    </div>


                    <div className='Eutexto'>

                            <div className='texto'>

                                <h3>Quem sou</h3>

                                <h2>Peterson Couto</h2>

                                <h4>Desenvolvedor Front-End</h4>

                                

                                <p>Meu nome é Peterson Fernando Couto, estudante de Análise e Desenvolvimento de Sistemas na Universidade Paulista e também de Front-end na escola DNC. Como desenvolvedor, realizo projetos freelancer fornecidos pela DNC, que envolvem reuniões, análises e desenvolvimento técnico. Estou comprometido em aplicar minhas habilidades e conhecimentos para entregar soluções eficazes e inovadoras.</p>

                            </div>

                            <div className='Contatos'>
                                    
                                <a href='https://WA.me/5519991955915' target='_blank' rel='noopener noreferrer'>

                                    <BsWhatsapp />

                                </a>

                                <a href='https://www.linkedin.com/in/peterson-fernando-6b3709133/' target='_blank' rel='noopener noreferrer'>

                                   <CiLinkedin />

                                </a>

                                <a href='https://www.instagram.com/petersonfernando17/' target='_blank' rel='noopener noreferrer'>

                                    <FaInstagram />

                                </a>


                                <a href='https://github.com/petersonfernandocouto' target='_blank' rel='noopener noreferrer'>

                                    <FaGithub />                                 

                                </a>


                            </div>
                        
                        
                    </div>


            </div>
        
        </div>

    )
}


export default EU