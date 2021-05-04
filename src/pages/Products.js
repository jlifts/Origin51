import React, { useContext, useEffect } from "react";
import ProductSection from "../components/ProductSection";
import Nav from "../components/Nav-copy";
import Buy from "../components/Buy";
import Loading from "../components/parts/Loading";
import { ShopContext } from "../context/shopProvider";
import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import HorizontalScroll from "../functions/horizontal-scroll";

const Products = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {
      // cleanup
    };
  }, [fetchAllProducts]);

  // document.addEventListener("DOMContentLoaded", function () {
  //   gsap.registerPlugin(ScrollTrigger);

  //   let sections = gsap.utils.toArray(".divScroll");
  //   let container = document.querySelector(".contents");

  //   gsap.to(sections, {
  //     x: () =>
  //       -(container.scrollWidth - document.documentElement.clientWidth) + "px",
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       invalidateOnRefresh: true,
  //       pin: true,
  //       scrub: true,
  //       // base vertical scrolling on how wide the container is so it feels more natural.
  //       end: () => container.scrollWidth - document.documentElement.clientWidth,
  //     },
  //   });
  // });

  if (!products) return <Loading />;
  return (
    <>
      <Nav />
      {/* <HorizontalScroll> */}
      <motion.div
        className="contents"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {products.map((product) => (
          <div key={product.id} className="divScroll">
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
      {/* </HorizontalScroll> */}
    </>
  );
};

export default Products;
