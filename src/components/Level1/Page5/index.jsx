import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import TopBar from "../../TopBar/index.jsx";
import BoxLeft from "../../BoxLeft/index.jsx";
import BoxRight from "../../BoxRight/index.jsx";
import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showThirdMessage, setShowThirdMessage] = useState(false);
  const [showFourthMessage, setShowFourthMessage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  let navigate = useNavigate();

  const messageProps1 = useSpring({
    opacity: showSecondMessage ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const messageProps2 = useSpring({
    opacity: showThirdMessage ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const messageProps3 = useSpring({
    opacity: showFourthMessage ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 500 },
    onRest: () => setShowButton(true),
  });

  const buttonProps = useSpring({
    background: `linear-gradient(to bottom, green, green)`,
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0px 0px 20px rgba(99, 0, 134, 0.8)",
    config: { tension: 200, friction: 10 },
    color: "white",
    fontWeight: "900",
    padding: "5px",
    opacity: showButton ? 1 : 0,
    transform: showButton ? "translateY(0px)" : "translateY(10px)",
    from: { opacity: 0, transform: "translateY(10px)" },
  });

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setShowSecondMessage(true);
    }, 2000);

    const timeout2 = setTimeout(() => {
      setShowThirdMessage(true);
    }, 4000);

    const timeout3 = setTimeout(() => {
      setShowFourthMessage(true);
    }, 6000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div style={{ color: "white", padding: "20px" }}>
      <TopBar advance={"80%"} />
      <div
        style={{
          margin: "45px",
          gap: "35px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BoxRight messageRight="Ya sé cuales son las partes de una variable" />
        <animated.div style={messageProps1}>
          <BoxLeft messageLeft="Ahora puedes crear variables de tipo entero" />
        </animated.div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <animated.button
          style={buttonProps}
          className="start-button"
          onClick={() => navigate("/aprendizaje/6")}
        >
          INICIAR
        </animated.button>
      </div>
    </div>
  );
};

export default Page3;
