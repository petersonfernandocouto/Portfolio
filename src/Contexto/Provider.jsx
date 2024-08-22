import Contexto from "./Context";
//import { useState } from "react";

import PropTypes from "prop-types"; // estava dando erro na props de Provider e então eu instalei ("import PropTypes from "prop-types";") no terminal, isso ajuda a retirar o erro e consegue evitar problemas no futuro

function Provider( {children} ) {
    

    const DescricaoExperiencia = {

       

        
    }


    return (

        <Contexto.Provider value={DescricaoExperiencia}>

            {children}

        </Contexto.Provider>
    )
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
  }; // este codigo ajuda a retirar o erro da props do provider.Explicação está em um dos import's no inicio deste arquivo


export default Provider