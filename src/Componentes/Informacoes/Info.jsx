import './index.scss'
import '../../MediaQueries/Informações.scss'
import IMG from '../../../public/IMG/P.png'


function Infor() {


    return (

        <div className='InforContainer'>

            <div className='Apresentacao'>

                <h1>Tenho 27 anos, apaixonado por criar projetos utilizando as tecnologias de <strong>Front-end</strong>. Meu foco é entregar soluções de qualidade que realmente fazem a diferença.</h1>

                <h3>Uma mistura de Design, Desenvolvimento Frontend e habilidade profissional que vão destacar seu produto no mercado</h3>


                <a href='https://www.linkedin.com/in/peterson-fernando-6b3709133/' target='_blank' rel='noopener noreferrer'>
                
                    <button className='Botao'>Perfil Linkeding</button>
                
                </a>
                


            </div>
            
            <div>

                    <img src={IMG} className='img'/>

            </div>
        </div>
    )
}


export default Infor