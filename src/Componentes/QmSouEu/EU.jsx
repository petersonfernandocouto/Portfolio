import './index.scss';
import EuP from '../../../public/IMG/EuP.jpg'

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

                                <br /><br />

                                <p>Meu nome é Peterson Fernando Couto, estudante de Análise e Desenvolvimento de Sistemas na Universidade Paulista e também de <br />Front-end na escola DNC. Como desenvolvedor, realizo projetos freelancer fornecidos pela DNC, que envolvem reuniões, análises e desenvolvimento técnico. Estou comprometido em aplicar minhas habilidades e conhecimentos para entregar soluções eficazes e inovadoras.</p>

                            </div>
                        
                        
                    </div>


            </div>
        
        </div>

    )
}


export default EU