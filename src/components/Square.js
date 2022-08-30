const Square = (props) => {
  let style;
  if (props.value === "X") style = "XSquare";
  else style = "OSquare";
  return (                          // 5-11 Bir kare elemaninin yapisi
    <div>
      <button onClick={props.handleClick} id="Square" className={style}>
        {props.value}
      </button>
    </div>
  );
};

export default Square;
