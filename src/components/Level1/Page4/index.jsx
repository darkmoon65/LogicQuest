import React, { useEffect, useState } from "react";
import FelicidadesUno from "../../Modal/felicidades";
import ModalPartes from "../../Modal/modalPartes";
import PartesVar from "../../Modal/modalVariable";
import TopBar from "../TopBar";
import NubeDrag from "./nubeDrag";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Page4 = () => {
  const [isModalOpenRecuerda, setIsModalOpenRecuerda] = useState(false);
  const [isModalOpenPartVar, setIsModalOpenPartVar] = useState(false);

  const [isModalOpenPartesVariable, setIsModalOpenPartesVariable] =
    useState(false);
  const navigate = useNavigate();

  const handleOk = () => {
    setIsModalOpenPartVar(true);
    setTimeout(() => {
      setIsModalOpenPartVar(false);
      setIsModalOpenPartesVariable(true);
    }, 2500);
  };

  useEffect(() => {
    setIsModalOpenRecuerda(true);
  }, []);
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
          Partes de una variable
        </span>
        <NubeDrag
          openModal={() => setIsModalOpenRecuerda(true)}
          handleOk={handleOk}
        />
        <div>
          {isModalOpenRecuerda && (
            <ModalPartes
              onClosePartesVariable={() => setIsModalOpenRecuerda(false)}
            />
          )}
          {isModalOpenPartVar && (
            <PartesVar
              onClosePartesVariable={() => setIsModalOpenPartVar(false)}
            />
          )}
          {isModalOpenPartesVariable && (
            <FelicidadesUno
              onClose={() => setIsModalOpenPartesVariable(false)}
              onContinue={() => navigate("/aprendizaje/5")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page4;
