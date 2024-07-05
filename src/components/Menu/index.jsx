import React, { useState, useEffect } from "react";
import ItemMenu from "./ItemMenu";
import ImgEstudiar from "../../assets/icon_estudiando.png";
import ImgPlay from "../../assets/icon_play.png";
import manoDeslizante from "../../assets/mano_sitio.gif";
import { useNumber } from "../../contexts/index";

const Menu = () => {
  const [showHand, setShowHand] = useState(true);
  const { number } = useNumber();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHand(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log(number);
  }, [number]);
  return (
    <div>
      <div style={{ position: "absolute", top: "60px", left: "50px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={number < 1} />
      </div>
      <div style={{ position: "absolute", top: "160px", left: "200px" }}>
        <ItemMenu img={ImgPlay} isDisabled={number < 2} goto="/game" />
      </div>
      <div style={{ position: "absolute", top: "300px", left: "280px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={number < 3} />
      </div>
      <div style={{ position: "absolute", top: "440px", left: "260px" }}>
        <ItemMenu img={ImgPlay} isDisabled={number < 4} />
      </div>
      <div style={{ position: "absolute", top: "580px", left: "180px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={number < 5} />
      </div>
      <div style={{ position: "absolute", top: "650px", left: "50px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={number < 6} />
      </div>
      {showHand && (
        <img
          src={manoDeslizante}
          alt="mano_en_movimiento"
          className="hand-overlay-menu"
          style={
            number === 1
              ? { top: "140px", left: "120px" }
              : { top: "240px", left: "280px" }
          }
        />
      )}
    </div>
  );
};
export default Menu;
