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

  function handleClick(){
    const nextSquares = squares.slice();
    nextSquares[0] = "x";
    setSquares(nextSquares);
  }

  return (    
    <>

      <div className="linha-tabuleiro">
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
      </div>

      <div className="linha-tabuleiro">
        <Square value={squares[3]} onSquareClick={handleClick}/>
        <Square value={squares[4]} onSquareClick={handleClick}/>
        <Square value={squares[5]} onSquareClick={handleClick}/>
      </div>

      <div className="linha-tabuleiro">
        <Square value={squares[6]} onSquareClick={handleClick}/>
        <Square value={squares[7]} onSquareClick={handleClick}/>
        <Square value={squares[8]} onSquareClick={handleClick}/>
      </div>

    </>
    );
}
