import React from "react";
import emoji from "../../../assets/emoji.png";

const BoxRight = ({ messageRight }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#CFAFDE",
          color: "#000",
          width: "60%",
          height: "50%",
          borderRadius: "8px",
          padding: "15px",
          lineHeight: "20px",
          marginRight: "20px",
          fontSize: "13px",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              content: '""',
              position: "absolute",
              top: "10px",
              right: "-25px",
              width: "0",
              height: "0",
              border: "15px solid transparent",
              borderLeftColor: "#CFAFDE",
              borderRight: "0",
              borderTop: "0",
            }}
          />
          {messageRight}
        </div>
      </div>
      <img src={emoji} alt="emoji" height={"70px"} />
    </div>
  );
};

export default BoxRight;
