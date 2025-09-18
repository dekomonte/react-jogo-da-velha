import Board from "./Board";
import "./styles.css";
import { FaReact } from 'react-icons/fa';

export default function App() {
  return (
    <div className="app">
      <h1>Jogo da Velha</h1>
      <p>Desafie um amigo e veja quem vence!</p>
      <Board />
      <footer>
        <small>
          Feito com React <FaReact style={{ color: "#61dafb", verticalAlign: "middle" }} /> 
        </small>
      </footer>
    </div>
  );
}
