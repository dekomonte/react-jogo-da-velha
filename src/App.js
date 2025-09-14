//-----Anotacoes-----
//Componentes -> Peça de código reutilizável que representa uma parte da UI
//JSX -> JavaScript + HTML
//state -> Lembrar de coisas
//Closures -> Uma funcao interna tem acesso as variaveis de uma funcao externa

import { useState } from "react";

function Square({valor, onSquareClick}){

  // const [valor, setValor] = useState(null);
  
  // function handleClick(){
  //   //console.log('Clique!');
  //   setValor('x');
  // }

  // return (
  //   <button className="square" onClick={handleClick}>
  //     {valor}
  //   </button>
  // )

  return (

    <button className="square" onClick={onSquareClick}>
      {valor}
    </button>

  );

}

export default function Board() {

  const[squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = "x";
    setSquares(nextSquares);
  }

  return (    
    <>

      <div className="linha-tabuleiro">
        <Square valor={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square valor={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square valor={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="linha-tabuleiro">
        <Square valor={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square valor={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square valor={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="linha-tabuleiro">
        <Square valor={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square valor={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square valor={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

    </>
    );
}
