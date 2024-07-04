import React, { useState, useEffect } from "react";
import FelicidadesUno from "../../Modal/felicidades";
import PartesVariable from "../../Modal/modalPartes";
import Recuerda from "../../Modal/recuerda";
import TopBar from "../TopBar";
import NubeDrag from "./nubeDrag";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRecuerda, setIsModalOpenRecuerda] = useState(false);
  const [isModalOpenPartesVariable, setIsModalOpenPartesVariable] =
    useState(false);
  const navigate = useNavigate();

  const handleOk = () => {
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
        <span style={{ fontSize: "25px", textAlign: "center" }}>
          Selecciona y arrastra los valores enteros
        </span>
        <NubeDrag
          openModal={() => setIsModalOpenRecuerda(true)}
          handleOk={handleOk}
        />
        <div>
          {isModalOpenRecuerda && (
            <Recuerda onCloseRecuerda={() => setIsModalOpenRecuerda(false)} />
          )}
          {isModalOpenPartesVariable && (
            <FelicidadesUno
              onClose={() => setIsModalOpenPartesVariable(false)}
              onContinue={() => navigate("/aprendizaje/3")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page1;
