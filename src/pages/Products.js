import React, { useContext, useEffect } from "react";
import ProductSection from "../components/ProductSection";
import Buy from "../components/Buy";
import Loading from "../components/parts/Loading";
// import Footer from "../components/Footer";
import { ShopContext } from "../context/shopProvider";
import "../styles/Products.scss";
import { motion } from "framer-motion";

const Products = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {
      // cleanup
    };
  }, [fetchAllProducts]);

  if (!products) return <Loading />;
  return (
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {products.map((product) => (
        <div key={product.id}>
          <ProductSection
            className="product2"
            title={product.title}
            imageUrl={product.images[0].src}
            body={product.description}
            alt={product.title}
          />
          <Buy product={product} />
        </div>
      ))}
    </motion.div>
  );
};

export default Products;
