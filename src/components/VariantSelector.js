import React, { useContext } from "react";
import { ShopContext } from "../context/shopProvider";

const VariantSelector = () => {
  const { changeVariant } = useContext(ShopContext);

  return <div className="selector"></div>;
};
export default VariantSelector;
