import React, { useEffect, useState } from "react";
import logoLogicQuest from "../../assets/logo.png";

import { useNavigate } from "react-router-dom";

const Logo = () => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return (
    <div
      style={{
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      LOGIC QUEST
      <img
        src={logoLogicQuest}
        alt="log_logic_quest"
        className="hand-overlay"
      />
    </div>
  );
};

export default Logo;
