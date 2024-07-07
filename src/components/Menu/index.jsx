import React, { useState, useEffect } from "react";
import ItemMenu from "./ItemMenu";
import ImgEstudiar from "../../assets/icon_estudiando.png";
import ImgPlay from "../../assets/icon_play.png";
import manoDeslizante from "../../assets/mano_sitio.gif";
import { useNumber } from "../../contexts/index";
import ModalInicio from "../Modal/modalInicio";
import ImgHouse from "../../assets/icon_home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const [showHand, setShowHand] = useState(true);
  const { number } = useNumber();
  const [showModal, setShowModal] = useState(true);

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
      <div
        style={{
          display: "flex",
          gap: "50px",
          paddingTop: "25px",
          paddingLeft: "25px",
        }}
      >
        <img src={ImgHouse} alt="" width={65} />
        <span style={{ color: "white", fontSize: "25px" }}>Logic Quest</span>
      </div>
      <br />
      <div style={{ position: "absolute", top: "100px", left: "50px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={number < 1} />
      </div>
      <div style={{ position: "absolute", top: "200px", left: "200px" }}>
        <ItemMenu img={ImgPlay} isDisabled={number < 2} goto="/game" />
      </div>
      <div style={{ position: "absolute", top: "340px", left: "280px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={number < 3} />
      </div>
      <div style={{ position: "absolute", top: "480px", left: "260px" }}>
        <ItemMenu img={ImgPlay} isDisabled={number < 4} />
      </div>
      <div style={{ position: "absolute", top: "620px", left: "180px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={number < 5} />
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
      {showModal && <ModalInicio onClose={() => setShowModal(false)} />}
    </div>
  );
};
export default Menu;
