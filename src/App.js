//Componentes -> Peça de código reutilizável que representa uma parte da UI
//JSX -> JavaScript + HTML

function Square({ valor }){
  return <button className="square">{valor}</button>;
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
