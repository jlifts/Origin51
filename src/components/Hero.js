import React from "react";
import "../styles/Hero.scss";
import Logo from "../Images/Origin51_logo_alien.svg";
import Text from "../Images/Origin51_alt-logotype.svg";
import { motion } from "framer-motion";

const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      type: "spring",
      delay: 0.5,
      duration: 3,
    },
  },
};

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-images">
        <motion.img
          src={Logo}
          className="logo"
          alt=""
          variants={fade}
          initial="hidden"
          animate="show"
        />
        <motion.img
          src={Text}
          className="logo name"
          alt=""
          variants={fade}
          initial="hidden"
          animate="show"
        />
      </div>
      <div className="arrow">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
