import React from "react";
import buho from "../../../assets/buho.png";

const BoxLeft = ({ messageLeft }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <img
        src={buho}
        alt="buho"
        height={"130px"}
        style={{ transform: "scaleX(-1)" }}
      />
      <div
        style={{
          position: "relative",
          backgroundColor: "#FBEFFF",
          color: "#000",
          width: "60%",
          height: "50%",
          borderRadius: "8px",
          padding: "15px",
          lineHeight: "20px",
          marginLeft: "20px",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              content: '""',
              position: "absolute",
              top: "10px",
              left: "-25px",
              width: "0",
              height: "0",
              border: "15px solid transparent",
              borderRightColor: "#FBEFFF",
              borderLeft: "0",
              borderTop: "0",
            }}
          />
          {messageLeft}
        </div>
      </div>
    </div>
  );
};

export default BoxLeft;
