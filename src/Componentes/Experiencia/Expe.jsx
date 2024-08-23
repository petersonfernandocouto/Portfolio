import './App.scss';
import { useContext } from 'react';
import Contexto from '../../Contexto/Context'; // Importando o contexto

function Experiencias() {
    const { experienciaAtual, alterarExperiencia } = useContext(Contexto);

    return (

        <section>

            <h1>Experiências</h1>

            <div className='BotaoTexto'>

                <div className='secButton'>
                    <button onClick={() => alterarExperiencia(1)}>SubGerente</button>
                    <button onClick={() => alterarExperiencia(2)}>Gerente</button>
                    <button onClick={() => alterarExperiencia(3)}>Programador</button>
                </div>

                <div className='expeDes'>

                    <div className='tituloData'>
                        <h2>{experienciaAtual.Cargo}</h2>
                        <p>{experienciaAtual.Periodo}</p>
                    </div>

                    <h3>{experienciaAtual.Empresa}</h3>
                    <p>{experienciaAtual.Descricao}</p>
                    
                </div>
            </div>

        </section>
    );
}

export default Experiencias;