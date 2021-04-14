import React, { useState } from "react";
import "../styles/Buy.scss";
import { Row, Col } from "atomize";
import { useSelectedVariant } from "../config/hooks";
import AddToCart from "./parts/AddToCartButton";
import Quantity from "./parts/Quantity";
import VariantOptions from "./parts/VariantSelector";

//Smokable Id = 6551422795985
//Vape Id = 6551423058129
const Buy = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
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
            <Quantity handleInput={setQuantity} defaultValue={quantity} />
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
