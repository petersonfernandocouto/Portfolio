import './index.scss';
import '../../MediaQueries/eu.scss'
import EuP from '../../../public/IMG/EuP.jpg'
import { BsWhatsapp } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState, useMemo } from 'react';

function EU() {

    const [text, setText] = useState('');
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    const toRotate = useMemo(() => ['Meu nome é Peterson Fernando Couto, estudante de Análise e Desenvolvimento de Sistemas na Universidade Paulista e também de Front-end na escola DNC. Como desenvolvedor, realizo projetos freelancer fornecidos pela DNC, que envolvem reuniões, análises e desenvolvimento técnico. Estou comprometido em aplicar minhas habilidades e conhecimentos para entregar soluções eficazes e inovadoras.'], []);

    useEffect(() => {
        
        const toType = () => {
            let i = loop % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                
                setIsDeleting(false);
                setDelta(null);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setDelta(period);
                setLoop(loop + 1);
            }
        };

        if (delta !== null) {
            let ticker = setInterval(() => {
                toType();
            }, delta);
            return () => clearInterval(ticker);
        }
    }, [text, delta, loop, isDeleting, toRotate, period]);

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
                        <p>{text}</p>
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
    );
}

export default EU;
