import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import felicidades_uno from "../../assets/felicidades_uno.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

const FelicidadesUno = ({ onClose, onContinue }) => {
  const modalRef = useRef();
  const navigate = useNavigate();

  const closeModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    return () => {
      document.removeEventListener("mousedown", closeModal);
    };
  }, []);

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

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
            ¡GENIAL!
          </span>
          <img src={felicidades_uno} alt="felicidades" width={"70%"} />
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <button
              onClick={() => navigate("/")}
              style={{
                width: "35px",
                height: "35px",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#5eafdd",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faHome} style={{ marginRight: "px" }} />
            </button>
            <button
              onClick={onContinue}
              style={{
                width: "35px",
                height: "35px",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#01BC00",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default FelicidadesUno;
