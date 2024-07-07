import React, { useState, useEffect } from "react";
import FelicidadesUno from "../../Modal/felicidades";
import ModalPartes from "../../Modal/modalPartes";
import TopBar from "../../TopBar";
import "./style.css";
import CofreGift from "../../../assets/cofre.gif";
import CofreVacio from "../../../assets/cofre_solo.png";
import { useNavigate } from "react-router-dom";
import { useNumber } from "../../../contexts/index";
import rnImage from "../../../assets/rn.png";
import rvImage from "../../../assets/rv.png";
import soundBueno from "../../../assets/complete_game.wav";
import soundMalo from "../../../assets/game_over.wav";

const Page4 = () => {
  const [isModalOpenRecuerda, setIsModalOpenRecuerda] = useState(false);
  const [isModalOpenPartesVariable, setIsModalOpenPartesVariable] =
    useState(false);

  const [tipoValue, setTipoValue] = useState("");
  const [nombreValue, setNombreValue] = useState("");
  const [valorValue, setValorValue] = useState("");
  const [isLoadingGif, setIsLoadingGif] = useState(true);
  const [showCofreVacio, setShowCofreVacio] = useState(false);
  const [validarNombre, setValidarNombre] = useState(false);
  const [validarNumero, setValidarNumero] = useState(false);

  const [fase, setFase] = useState(1);
  const navigate = useNavigate();
  const { number, updateNumber } = useNumber();
  const audioBueno = new Audio(soundBueno);
  const audioMalo = new Audio(soundMalo);

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
      setValidarNombre(true);
      audioBueno.play();
    } else {
      audioMalo.play();
    }
  };
  const handleBlurNombre = () => {
    console.log(nombreValue);
    const regex = /^[^\d][^\d]*$/;
    if (regex.test(nombreValue)) {
      setFase(3);
      setValidarNombre(false);
      setValidarNumero(true);
      audioBueno.play();
    } else {
      audioMalo.play();
    }
  };
  const handleBlurValor = () => {
    setIsModalOpenPartesVariable(true);
    updateNumber(number + 1);
    audioBueno.play();
  };
  return (
    <div style={{ color: "white", padding: "20px" }}>
      <TopBar advance={"90%"} />
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

        {validarNumero && <img src={rvImage} />}
        {validarNombre && <img src={rnImage} />}

        <div style={{ display: "flex", marginBottom: "-25px" }}>
          <span style={{ marginRight: "60px" }}>Tipo</span>
          <span style={{ marginRight: "120px" }}>Nombre</span>
          <span style={{ marginRight: "20px" }}>Valor</span>
        </div>
        <div className="container_inputs2">
          <input
            className="inputs_reto"
            id="first_input"
            style={{ width: "60px", height: "35px", borderRadius: "20px" }}
            type="text"
            value={tipoValue}
            onChange={(e) => setTipoValue(e.target.value.toLowerCase())}
            onBlur={handleBlurTipo}
            placeholder="entero"
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

        <div>
          {isModalOpenRecuerda && (
            <ModalPartes
              onClosePartesVariable={() => setIsModalOpenRecuerda(false)}
            />
          )}
          {isModalOpenPartesVariable && (
            <FelicidadesUno
              onClose={() => setIsModalOpenPartesVariable(false)}
              onContinue={() => navigate("/")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page4;
