import Square from "./Square";
const Board = (props) => {
  return (                // 3-13 Ust komponentteki square statini props yardimiyla kullanilip map fonksiyonu ile kareler olusturuluyor
    <div id="Board">
      {props.squares.map((square, index) => ( 
        <Square
          handleClick={() => props.handleClick(index)}
          value={props.squares[index]}
          key={index}
        ></Square>
      ))}
    </div>
  );
};

export default Board;
