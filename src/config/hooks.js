/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext, useState } from "react";
import { ShopContext } from "../context/shopProvider";

export const useSelectedVariant = (product) => {
  const { getVariants, getSelectedVariant } = useContext(ShopContext);
  const [selectedVariant, setSelectedVariant] = useState();
  const [optionsSelected, setOptionsSelected] = useState({});
  const [loadingProduct, setLoadingProduct] = useState(true);

  let mounted;

  const handleOptionChange = async (option) => {
    const { variants } = await getVariants(product.handle);
    const fullOptions = { ...optionsSelected, ...option };

    // get selected variants
    const selectedProduct = await getSelectedVariant(product, fullOptions);
    // determine if in stock
    if (selectedProduct) {
      const inventoryCheck = variants.filter(
        (variant) => variant.id === selectedProduct.id
      )[0];

      selectedProduct.availableToSell = inventoryCheck.availableForSale;
      selectedProduct.outOfStock = inventoryCheck.currentlyNotInStock;
      selectedProduct.limitedInventory =
        inventoryCheck.quantityAvailable < 6 &&
        inventoryCheck.quantityAvailable > 0
          ? inventoryCheck.quantityAvailable
          : null;

      setSelectedVariant(selectedProduct);
      setOptionsSelected(fullOptions);
    } else {
      setSelectedVariant(null);
    }
  };

  useEffect(() => {
    mounted = true;
    const productKeys = Object.keys(product).length;
    productKeys > 0 && setLoadingProduct(false);

    /* run handle option to enable add to cart on items that dont require size choice. */
    if (productKeys > 0 && product.variants.length === 1) {
      const { name, value } = product.variants[0].selectedOptions[0];
      handleOptionChange({ [name]: value });
    }

    return () => (mounted = false);
  }, []);

  return {
    selectedVariant,
    handleOptionChange,
    loadingProduct,
  };
};
