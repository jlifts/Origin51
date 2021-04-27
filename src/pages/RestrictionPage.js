import Logo from "../Images/Origin51_logo_alien.svg";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import "../styles/Home.scss";

export default function AgeRestriction() {
  const history = useHistory();
  return (
    <motion.div
      className="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="entry">
        <div className="age container">
          <img src={Logo} className="logo" alt="logo" />
          <h3 className="age label">
            You must be 18 or older to view and order from this site
          </h3>
          <div className="button container">
            <Link className="age button" to="/home">
              Yes, I am 18 or older
            </Link>
            <button className="age button" onClick={() => history.goBack()}>
              No
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
