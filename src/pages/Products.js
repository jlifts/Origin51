import React, { useContext, useEffect } from "react";
import ProductSection from "../components/ProductSection";
import Nav from "../components/Nav-copy";
import Buy from "../components/Buy";
import Loading from "../components/parts/Loading";
import { ShopContext } from "../context/shopProvider";
import { motion } from "framer-motion";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import HorizontalScroll from "../functions/horizontal-scroll";

const Products = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
    return () => {
      // cleanup
    };
  }, [fetchAllProducts]);

  // gsap.registerPlugin(ScrollTrigger);

  // let sections = gsap.utils.toArray(".containerP");

  // gsap.to(sections, {
  //   x: () =>
  //     -(sections.scrollWidth - document.documentElement.clientWidth) + "px",
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: sections,
  //     invalidateOnRefresh: true,
  //     pin: true,
  //     scrub: 1,
  //     // base vertical scrolling on how wide the container is so it feels more natural.
  //     end: () => "+=" + sections.offsetWidth,
  //   },
  // });

  if (!products) return <Loading />;
  return (
    <>
      <HorizontalScroll>
        <Nav />
        <motion.div
          className="contents"
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
      </HorizontalScroll>
    </>
  );
};

export default Products;
