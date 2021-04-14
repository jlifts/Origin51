import { useContext, useState } from "react";
import { ShopContext } from "../../context/shopProvider";
import { Button } from "atomize";

const AddToCartButton = ({ disabled = false, product, quantity = 1 }) => {
  const { addItemToCheckout } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    setIsLoading(true);
    await addItemToCheckout(product.id, quantity);
    setIsLoading(false);
  };

  return (
    <Button
      onClick={handleOnClick}
      disabled={disabled}
      isLoading={isLoading}
      loadingText="Adding to Cart"
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
