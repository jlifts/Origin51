import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/Origin51_logo_alien.svg";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <motion.div
      className="PageNotFound"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>404</h1>
      <img src={logo} height={300} width={400} alt=""></img>
      <h2>Watch out, do not be abducted!</h2>
      <Link to="/" className="li">
        Teleport back to Home!
        <span className="arrow"></span>
      </Link>
    </motion.div>
  );
};

export default PageNotFound;
