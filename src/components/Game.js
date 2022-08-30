import { useState } from "react";
import Board from "./Board";
const Game = () => {
  const [Square, setSquare] = useState(Array(9).fill());
  const [isNext, setNext] = useState("X");
  const [winner, setWinner] = useState();
  const [step, setStep] = useState(0);
  const [scoreboard, setScore] = useState(Array(2).fill(0));

  const restart = () => {              // 10-18 Play Again butonuna basinca calisan fonksiyon, karelerin degerleri, kazanan ve adim sayisi sifirlaniyor
    setSquare(Array(9).fill());
    setWinner("");
    setStep(0);
    if (step % 2 === 0) {
      if (isNext === "X") setNext("O");
      else setNext("X");
    }
  };

  const renderNext = () => {        // 20-28 Skorbordun altinda siradaki oyuncuyu, kazanani veya beraberlik durumunu olusturan fonksiyon
    if (winner) {
      return <h4>Winner: {winner}</h4>;
    } else if (step < 9) {
      return <h4>Next player: {isNext}</h4>;
    } else {
      return <h4>Draw</h4>;
    }
  };

  const calculateWinner1 = (squares) => {    // 30-60 Kazananin belirlenmesi ve skorbord guncellemeleri
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        if (squares[a] === "X") {
          let newScore = [scoreboard[0] + 1, scoreboard[1]];
          setScore(newScore);
          return squares[a];
        } else {
          let newScore = [scoreboard[0], scoreboard[1] + 1];
          setScore(newScore);
          return squares[a];
        }
      }
    }
    return null;
  };

  const handleClick = (i) => {     // 62-81 Her bir kareye basildiginda calisan fonksiyon
    if (!winner) {
      let newSquare = Square;
      if (isNext === "X") {
        if (!newSquare[i]) {
          newSquare[i] = "X";
          setNext("O");
          setStep(step + 1);
        }
      } else {
        if (!newSquare[i]) {
          newSquare[i] = "O";
          setNext("X");
          setStep(step + 1);
        }
      }
      setSquare(newSquare);
      setWinner(calculateWinner1(Square));
    }
  };

  return (                  // 83-95 Board komponentinin cagrilmasi, skorboard, siradaki oyuncu ve play again butonunun gosterilmesi
    <div className="Game">
      <h2>Tic-Tac-Toe</h2>
      <h5>
        X: {scoreboard[0]} || {scoreboard[1]} :O
      </h5>
      <Board handleClick={handleClick} squares={Square} isNext={isNext} />
      {renderNext()}
      <button id="button" onClick={() => restart()}>
        Play Again
      </button>
    </div>
  );
};
export default Game;
