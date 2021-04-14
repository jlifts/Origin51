import React, { useState } from "react";
import "../styles/Buy.scss";
import { Row, Col } from "atomize";
import { useSelectedVariant } from "../config/hooks";
import AddToCart from "./parts/AddToCartButton";
import VariantOptions from "./parts/VariantSelector";

//Smokable Id = 6551422795985
//Vape Id = 6551423058129
const Buy = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const increment = async () => setQuantity(quantity + 1);
  const decrement = async () =>
    setQuantity(quantity > 1 ? quantity - 1 : quantity + 0);
  const handleChange = async (e) => {
    const { value } = e.target;
    setQuantity(parseInt(value, 0));
  };
  const { selectedVariant, handleOptionChange } = useSelectedVariant(product);

  if (!product) return <div>Loading</div>;
  return (
    <div className="add">
      <Row>
        <Col>
          <span className="price">
            ${selectedVariant?.price || product.variants[0].price}
          </span>
          <VariantOptions
            product={product}
            handleChange={handleOptionChange}
            getOption={0}
            hidden={product.variants.length < 2}
          />
          <div className="quantity-container">
            <button className="increase quantity" onClick={increment}>
              +
            </button>
            <input
              className="quantity number"
              min={1}
              onChange={async (e) => handleChange(e)}
              defaultValue={quantity}
              value={quantity}
              readOnly
            />
            <button className="decrease quantity" onClick={decrement}>
              -
            </button>
          </div>
          <AddToCart
            disabled={!selectedVariant && !selectedVariant?.availableToSell}
            product={selectedVariant}
            quantity={quantity}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Buy;
