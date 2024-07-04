import React, { useState } from "react";
import FelicidadesUno from "../../Modal/felicidades";
import Recuerda from "../../Modal/recuerda";
import TopBar from "../TopBar";
import NubeDrag from "./nubeDrag";
import "./style.css";

const Page4 = () => {
  const [isModalOpenRecuerda, setIsModalOpenRecuerda] = useState(false);
  const [isModalOpenPartesVariable, setIsModalOpenPartesVariable] =
    useState(false);

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
        <span style={{ fontSize: "30px", textAlign: "center" }}>
          Partes de una variable
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
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page4;
