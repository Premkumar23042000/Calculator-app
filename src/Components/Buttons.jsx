const Buttons = ({ handleClick }) => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let symbols = [ "+", "-", "/", "*", "C", "D", "="]

    return (
        <div className="btn-cont">
          <div>
          {
                numbers.map((num) => (
                    <button key={num} onClick={() => handleClick(num)}>{num}</button>
                ))
            }
          </div>
          <div>
            {symbols.map((symbol) => (
                <button key={symbol} onClick={() => handleClick(symbol)}>{symbol}</button>
            ))}
          </div>
        </div>
    );
};

export default Buttons;
