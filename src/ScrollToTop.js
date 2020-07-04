import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  // Scrolls to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <React.Fragment />;
}

export default ScrollToTop;
