import React, { useEffect, useState } from "react";
import "../theme/CustomSplash.css";
import Gif from "../assets/splash.gif";
const CustomSplash: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 6000)
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="custom-splash">
      <img src={Gif} alt="Splash" className="splash-gif" />
    </div>
  );
};

export default CustomSplash;
