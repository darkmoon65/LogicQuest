import React, { useState, useEffect } from "react";
import FelicidadesUno from "../../Modal/felicidades";
import PartesVariable from "../../Modal/modalPartes";
import Recuerda from "../../Modal/recuerda";
import TopBar from "../TopBar";
import NubeDrag from "./nubeDrag";
import "./style.css";

const Page1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          Selecciona y arrastra los valores enteros
        </span>
        <NubeDrag
          openModal={() => setIsModalOpenRecuerda(true)}
          handleOk={handleOk}
        />
        {/* <div>
<button onClick={() => setIsModalOpen(true)}>Abrir Modal</button>
{isModalOpen && (
<FelicidadesUno onClose={() => setIsModalOpen(false)} />
)}
</div> */}
        <div>
          <button onClick={() => setIsModalOpenRecuerda(true)}>
            Abrir Recuerda
          </button>
          {isModalOpenRecuerda && (
            <Recuerda onCloseRecuerda={() => setIsModalOpenRecuerda(false)} />
          )}
        </div>
        {/* <div>
<button onClick={() => setIsModalOpenPartesVariable(true)}>
Abrir Modal Partes
</button>
{isModalOpenPartesVariable && (
<PartesVariable
onClosePartesVariable={() => setIsModalOpenPartesVariable(false)}
/>
)}
</div> */}
      </div>
    </div>
  );
};

export default Page1;
