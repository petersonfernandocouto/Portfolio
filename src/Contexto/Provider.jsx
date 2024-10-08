import Contexto from "./Context";
import { useState } from "react";
import { Produtos_Mock } from '../API/API' //importação da API
import { Conhecimentos_Mock } from "../API/APIConhecimentos";

import PropTypes from "prop-types"; // estava dando erro na props de Provider e então eu instalei ("import PropTypes from "prop-types";") no terminal, isso ajuda a retirar o erro e consegue evitar problemas no futuro

function Provider({ children }) {

    {/* --------------------------------------------Abaixo Logica do Documento Expe.jsx ------------------------------------ */}

    const [experienciaAtual, setExperienciaAtual] = useState(Produtos_Mock[0]); // Irei iniciar como SubGerente, por este motivo o numero iniciar como "0" isso corresponde ao id "1" que está na API

    const alterarExperiencia = (id) => {
        const novaExperiencia = Produtos_Mock.find(exp => exp.id === id);
        setExperienciaAtual(novaExperiencia);
    }; // aqui estamos dizendo que alterarExperiencia recebe um id. novaExperiencia recebe o objeto correspondente ao id no arquivo Produtos_mock (API). O find tem a função de encontrar o objeto com o "id" especificado. "exp" é um nome que damos (pode ser substituído) e ao comparar exp.id com o "id", encontramos o objeto correspondente na API.

    {/* --------------------------------------------Acima Logica do Documento Expe.jsx ------------------------------------ */}


    {/* --------------------------------------------Abaixo Logica do Documento Conhecimento.jsx ------------------------------------ */}
    
            const [ ConhecimentoAtual, setConhecimentoAtual ] = useState( Conhecimentos_Mock[0] );

            const alterarConhecimento = (id) => {

                const novoConhecimento = Conhecimentos_Mock.find(Conhe => Conhe.id === id);
                setConhecimentoAtual(novoConhecimento)
            }

    {/* --------------------------------------------Acima Logica do Documento Conhecimento.jsx ------------------------------------ */}        


    const DescricaoExperiencia = {

        experienciaAtual,
        alterarExperiencia,

        ConhecimentoAtual,
        alterarConhecimento,


    };



    return (
        <Contexto.Provider value={DescricaoExperiencia}>
            {children}
        </Contexto.Provider>
    );
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
}; // este codigo ajuda a retirar o erro da props do provider.Explicação está em um dos import's no inicio deste arquivo

export default Provider;