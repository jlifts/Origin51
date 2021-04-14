import { useContext } from "react";
import { ShopContext } from "../../context/shopProvider";
import "../../styles/App.scss";

const Quantity = ({ handleInput, defaultValue }) => {
  const { increment, decrement } = useContext(ShopContext);
  return (
    <>
      <button className="increase quantity" onClick={(val) => increment(val)}>
        +
      </button>
      <input
        className="quantity number"
        min={0}
        onChange={(val) => handleInput(val)}
        defaultValue={defaultValue}
        readOnly
      />
      <button className="decrease quantity" onClick={(val) => decrement(val)}>
        -
      </button>
    </>
  );
};
export default Quantity;
