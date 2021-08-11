import React from "react";
import PromoAnimation from "./PromoAnimation";
import Enroll from "./Enroll";
import Countdown from "./Countdown";

const Promotion = () => {
  return (
    <div className="promotion_wrapper" style={{ background: "#ffffff" }}>
      <PromoAnimation />
      <Countdown />
      <Enroll />
    </div>
  );
};

export default Promotion;
