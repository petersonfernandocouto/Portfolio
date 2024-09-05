import './index.scss';
import '../../MediaQueries/projetos.scss'
import { BiStoreAlt } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { VscTasklist } from "react-icons/vsc";


function Projetos() {


    return (

        <div className='Projetos'>

            <h1>Projetos Pessoais</h1>
            
          <div className='Container'>

            <div className='Pai'>

                <div className='Icone'>

                        <BiStoreAlt />

                </div>

                <div className='ProjetoTitulo'>

                    <h2>E-commerce</h2>

                    <p>Este é um website de e-commerce especializado na venda de roupas. O site permite que os usuários façam login, explorem peças, visualizem detalhes específicos e finalizem suas compras de forma intuitiva.</p>

                </div>

                <a href='https://github.com/petersonfernandocouto/e-commerce' target='_blank' rel='noopener noreferrer'> 
                <button>Visitar repositório</button>
                
                </a>

            </div>

            {/*Pula Linha */}

            <div className='Pai'>

                <div className='Icone'>

                        <BsBag />

                </div>

                <div className='ProjetoTitulo'>

                    <h2>API mercado-livre</h2>

                    <p>Este Projeto simula uma experiência de compra no estilo Mercado Livre, permitindo que os usuários busquem produtos, adicionem ao carrinho. O carrinho exibe os itens selecionados e permite a remoção individual de produtos.</p>
                </div>

                <a href='https://github.com/petersonfernandocouto/react-mercado-livre' target='_blank' rel='noopener noreferrer'> 
                <button>Visitar repositório</button>
                
                </a>

            </div>

            {/*Pula Linha */}

            <div className='Pai'>

                <div className='Icone'>

                        <VscTasklist />

                </div>

                <div className='ProjetoTitulo'>

                    <h2>CheckList</h2>

                    <p>O projeto Tarefas é uma aplicação web que ajuda os usuários a organizar atividades diárias, permitindo adicionar, reescrever, deletar e marcar tarefas como feitas.</p>
                </div>

                <a href='https://github.com/petersonfernandocouto/tarefas' target='_blank' rel='noopener noreferrer'> 
                <button>Visitar repositório</button>
                
                </a>

            </div>

          </div>  

        </div>
    )
}


export default Projetos