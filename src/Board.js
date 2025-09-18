//-----Anotacoes-----
//Componentes -> Peça de código reutilizável que representa uma parte da UI
//JSX -> JavaScript + HTML
//state -> Lembrar de coisas
//Closures -> Uma funcao interna tem acesso as variaveis de uma funcao externa
//props

import { useState } from 'react';

function Square({valor, onSquareClick}) {

  return (

    <button className="square" onClick={onSquareClick}>
      {valor}
    </button>
    
  );

}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // bloqueia clique se houver vencedor ou empate ou quadrado já preenchido
    if (calculateWinner(squares) || squares[i] || !squares.includes(null)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = 'Vencedor: ' + winner;
  } else if (!squares.includes(null)) {
    status = 'Empate!';
  } else {
    status = 'Próximo: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>

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

      <button
        onClick={() => setSquares(Array(9).fill(null))}
        style={{ marginTop: '15px' }}
      >
        Reiniciar Jogo
      </button>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

