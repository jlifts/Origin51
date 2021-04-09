import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function Rescroll({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 300);
    });
    return () => {
      unlisten();
    };
  }, [history]);
  return null;
}

export default withRouter(Rescroll);
