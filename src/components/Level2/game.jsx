import React, { useState, useRef, useEffect } from "react";
import TopBar from "../Level1/TopBar";
import GameFinal from "../../assets/juego_final.png";

const Game = () => {
  const [isModalOpenRecuerda, setIsModalOpenRecuerda] = useState(false);
  const [isModalOpenPartesVariable, setIsModalOpenPartesVariable] =
    useState(false);

  const [tipoValue, setTipoValue] = useState("");
  const [nombreValue, setNombreValue] = useState("");
  const [valorValue, setValorValue] = useState("");
  const [isLoadingGif, setIsLoadingGif] = useState(true);
  const [showCofreVacio, setShowCofreVacio] = useState(false);

  const [fase, setFase] = useState(1);

  const handleOk = () => {
    setIsModalOpenPartesVariable(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoadingGif(false);
      setShowCofreVacio(true);
    }, 1000);
  }, []);

  const handleBlurTipo = () => {
    console.log(tipoValue);
    if (tipoValue === "entero") {
      setFase(2);
    }
  };
  const handleBlurNombre = () => {
    console.log(nombreValue);
    setFase(3);
  };
  const handleBlurValor = () => {
    setIsModalOpenPartesVariable(true);
  };
  return (
    <div style={{ color: "white", padding: "20px" }}>
      <TopBar />
      <div
        style={{
          margin: "20px",
          gap: "35px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={GameFinal} alt="" />
      </div>
    </div>
  );
};

export default Game;
