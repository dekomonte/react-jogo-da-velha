//-----Anotacoes-----
//Componentes -> Peça de código reutilizável que representa uma parte da UI
//JSX -> JavaScript + HTML
//state -> Lembrar de coisas

import { useState } from "react";

function Square(){

  const [valor, setValor] = useState(null);
  
  function handleClick(){
    console.log('Clique!');
  }

  return (
    <button className="square" onClick={handleClick}>
      {valor}
    </button>
  )

}

export default function Board() {
  return (    
    <>

      <div className="linha-tabuleiro">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="linha-tabuleiro">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="linha-tabuleiro">
        <Square />
        <Square />
        <Square />
      </div>

    </>
    );
}
