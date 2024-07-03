import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import TopBar from "../TopBar";
import BoxLeft from "./boxLeft.jsx";
import BoxRight from "./boxRight.jsx";

const Page2 = () => {
  const [showSecondMessage, setShowSecondMessage] = useState(false);
  const [showThirdMessage, setShowThirdMessage] = useState(false);
  const [showFourthMessage, setShowFourthMessage] = useState(false);

  // Configuración de animaciones para los mensajes
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
      <TopBar />
      <div
        style={{
          margin: "45px",
          gap: "35px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BoxRight messageRight="¿Por qué es necesario aprender a diferenciar los tipos de datos?" />
        <animated.div style={messageProps1}>
          <BoxLeft messageLeft="Para aprender a declarar cada tipo de dato" />
        </animated.div>
        <animated.div style={messageProps2}>
          <BoxRight messageRight="¿Qué tipos de datos me enseñarás?" />
        </animated.div>
        <animated.div style={messageProps3}>
          <BoxLeft messageLeft="Empezaremos por el tipo de dato ENTERO" />
        </animated.div>
      </div>
    </div>
  );
};

export default Page2;
