import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import partes_variable from "../../assets/partes_variable.png";
import partes_var from "../../assets/partes_var.png";

const PartesVar = ({ onClosePartesVariable }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClosePartesVariable();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClosePartesVariable();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClosePartesVariable]);

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: 1,
    transform: `translateY(0%)`,
    from: { opacity: 0, transform: `translateY(-100%)` },
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <animated.div style={animation} ref={modalRef}>
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: "35px",
              fontWeight: "900",
              margin: "10px",
            }}
          >
            Partes de una Variable:
          </span>
          <img src={partes_var} alt="partes_variable" width={"90%"} />
        </div>
      </animated.div>
    </div>
  );
};

export default PartesVar;
