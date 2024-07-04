import React, { useRef, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import felicidades_uno from "../../assets/felicidades_uno.png";
import confetti from "canvas-confetti";

const FelicidadesUno = ({ onClose }) => {
  const modalRef = useRef();

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

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
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
        backgroundColor: "rgba(0,0,0,0.5)",
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
        </div>
      </animated.div>
    </div>
  );
};

export default FelicidadesUno;
