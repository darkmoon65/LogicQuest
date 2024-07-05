import React, { useState, useRef, useEffect } from "react";
import FelicidadesUno from "../../Modal/felicidades";
import ModalPartes from "../../Modal/modalPartes";
import TopBar from "../TopBar";
import NubeDrag from "./nubeDrag";
import "./style.css";
import CofreGift from "../../../assets/cofre.gif";
import CofreVacio from "../../../assets/cofre_solo.png";
import { useNavigate } from "react-router-dom";

const Page4 = () => {
  const [isModalOpenRecuerda, setIsModalOpenRecuerda] = useState(false);
  const [isModalOpenPartesVariable, setIsModalOpenPartesVariable] =
    useState(false);

  const [tipoValue, setTipoValue] = useState("");
  const [nombreValue, setNombreValue] = useState("");
  const [valorValue, setValorValue] = useState("");
  const [isLoadingGif, setIsLoadingGif] = useState(true);
  const [showCofreVacio, setShowCofreVacio] = useState(false);

  const [fase, setFase] = useState(1);
  const navigate = useNavigate();

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
        <span style={{ fontSize: "30px", textAlign: "center" }}>
          Declara una variable Tipo entero
        </span>

        <div className="container_inputs">
          <input
            className="inputs_reto"
            id="first_input"
            style={{ width: "60px", height: "35px", borderRadius: "20px" }}
            type="text"
            value={tipoValue}
            onChange={(e) => setTipoValue(e.target.value)}
            onBlur={handleBlurTipo}
          />
          <input
            className="inputs_reto"
            id="second_input"
            style={{ width: "140px", height: "35px", borderRadius: "20px" }}
            type="text"
            value={nombreValue}
            onChange={(e) => setNombreValue(e.target.value)}
            disabled={fase < 2}
            onBlur={handleBlurNombre}
          />

          <span style={{ fontSize: "30px" }}> = </span>
          <input
            className="inputs_reto"
            id="third_input"
            style={{ width: "130px", height: "35px", borderRadius: "20px" }}
            type="number"
            value={valorValue}
            onChange={(e) => setValorValue(e.target.value)}
            disabled={fase < 3}
            onBlur={handleBlurValor}
          />
        </div>
        {isLoadingGif && <img src={CofreGift} />}
        <br />
        <br />
        {showCofreVacio && <img src={CofreVacio} />}
        <div>
          {isModalOpenRecuerda && (
            <ModalPartes
              onClosePartesVariable={() => setIsModalOpenRecuerda(false)}
            />
          )}
          {isModalOpenPartesVariable && (
            <FelicidadesUno
              onClose={() => setIsModalOpenPartesVariable(false)}
              onContinue={() => navigate("/game")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page4;
