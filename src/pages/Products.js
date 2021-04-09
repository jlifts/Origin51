import React, { useContext, useEffect } from "react";
import Section from "../components/Section";
import SectionR from "../components/SectionR";
import Photo1 from "../Images/Origin51_OutofthisWorld.svg";
import Photo2 from "../Images/Origin51_OutofthisWorld.svg";
import Buy from "../components/Buy";
import BuyL from "../components/BuyL";
import Loading from "../context/Loading";
import Footer from "../components/Footer";
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
      <SectionR
        className="product2"
        title="Premium Vape Cartridges"
        imageUrl={Photo2}
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et egestas dui. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque volutpat ante, consectetur semper enim blandit tristique. In dictum feugiat ante, quis ultricies elit lacinia lobortis. Phasellus nec finibus dui. Donec iaculis condimentum metus, eget vulputate tellus faucibus nec. Etiam gravida condimentum libero, in suscipit dui pretium id. Suspendisse dictum erat a laoreet pharetra. Sed non aliquam nibh, eu feugiat nisl.

                Maecenas viverra gravida enim nec molestie. Phasellus ac lorem eget odio luctus condimentum id sit amet ante. Duis posuere semper elit, in accumsan elit consequat aliquam. Nunc sed eleifend lectus. Phasellus condimentum mauris orci, vitae pulvinar neque efficitur elementum. Phasellus fringilla eget leo et elementum. Nulla suscipit ullamcorper neque in venenatis. Proin ullamcorper porttitor tortor, consectetur ultrices metus cursus ac. Maecenas pharetra dolor ut mi pellentesque gravida. Nulla hendrerit lorem enim."
      />

      <BuyL />

      <Section
        className="product1"
        title="Premium Smokable Hemp Cigarettes"
        imageUrl={Photo1}
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et egestas dui. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pellentesque volutpat ante, consectetur semper enim blandit tristique. In dictum feugiat ante, quis ultricies elit lacinia lobortis. Phasellus nec finibus dui. Donec iaculis condimentum metus, eget vulputate tellus faucibus nec. Etiam gravida condimentum libero, in suscipit dui pretium id. Suspendisse dictum erat a laoreet pharetra. Sed non aliquam nibh, eu feugiat nisl.

                Maecenas viverra gravida enim nec molestie. Phasellus ac lorem eget odio luctus condimentum id sit amet ante. Duis posuere semper elit, in accumsan elit consequat aliquam. Nunc sed eleifend lectus. Phasellus condimentum mauris orci, vitae pulvinar neque efficitur elementum. Phasellus fringilla eget leo et elementum. Nulla suscipit ullamcorper neque in venenatis. Proin ullamcorper porttitor tortor, consectetur ultrices metus cursus ac. Maecenas pharetra dolor ut mi pellentesque gravida. Nulla hendrerit lorem enim."
      />

      <Buy />
      <Footer />
    </motion.div>
  );
};

export default Products;
