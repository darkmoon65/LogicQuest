import React, { useState } from "react";
import TopBar from "../TopBar";
import "./style.css";
import FelicidadesUno from "../Modal/felicidades";
import ModalPartes from "../Modal/modalPartes";

const correctMoves = ["right", "down", "left", "down"];
const correctValues = ["4", "3", "1", "2"];

const Game = () => {
  const [isModalOpenPartesVariable, setIsModalOpenPartesVariable] =
    useState(false);

  const [tipoValue, setTipoValue] = useState("");
  const [nombreValue, setNombreValue] = useState("");
  const [valorValue, setValorValue] = useState("");
  const [turnMove, setTurnMove] = useState(0);

  const [fase, setFase] = useState(1);
  const [showModalError, setShowModalError] = useState(false);

  const handleBlurTipo = () => {
    console.log(tipoValue);
    if (tipoValue === "entero") {
      setFase(2);
    }
  };
  const handleBlurNombre = () => {
    console.log(nombreValue);
    setFase(3);
  };
  const handleBlurValor = () => {
    if (valorValue === correctValues[turnMove]) {
      console.log(correctMoves[turnMove], valorValue);
      move(correctMoves[turnMove], parseInt(valorValue));
      refreshTablero();
      setTurnMove(turnMove + 1);
    } else {
      setShowModalError(true);
    }
  };
  const refreshTablero = () => {
    setValorValue("");
    setTipoValue("");
    setNombreValue("");
    setFase(1);
  };

  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
  const [housePosition] = useState({ x: 3, y: 5 });
  const boardSize = 6;

  const pathCoordinates = [
    { x: 1, y: 0 },
    { x: 2, y: 0 },
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 4, y: 1 },
    { x: 4, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 3 },
    { x: 3, y: 4 },
    { x: 3, y: 5 },
  ];

  const move = (direction, steps) => {
    let newX = catPosition.x;
    let newY = catPosition.y;

    switch (direction) {
      case "up":
        newY -= steps;
        break;
      case "down":
        newY += steps;
        break;
      case "left":
        newX -= steps;
        break;
      case "right":
        newX += steps;
        break;
      default:
        return;
    }

    if (
      newX >= 0 &&
      newX < boardSize &&
      newY >= 0 &&
      newY < boardSize &&
      pathCoordinates.some((coord) => coord.x === newX && coord.y === newY)
    ) {
      setCatPosition({ x: newX, y: newY });
    }

    if (newX === housePosition.x && newY === housePosition.y) {
      setTimeout(() => {
        showModalCorrect();
      }, 500);
    }
  };
  const showModalCorrect = () => {
    setIsModalOpenPartesVariable(true);
  };

  const renderBoard = () => {
    const cells = [];
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        let cellClass = "cell";
        if (i === catPosition.y && j === catPosition.x) {
          cellClass += " cat";
        } else if (i === housePosition.y && j === housePosition.x) {
          cellClass += " house";
        } else if (
          pathCoordinates.some((coord) => coord.x === j && coord.y === i)
        ) {
          cellClass += " path";
        }

        cells.push(<div key={`${i}-${j}`} className={cellClass}></div>);
      }
    }
    return cells;
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
        <span>Guía al buho a su casa</span>
        <ul>
          <li>Crea variables tipo entero</li>
          <li>El valor será la cantidad de pasos que avance</li>
        </ul>

        <div>
          <div className="game-board">{renderBoard()}</div>
        </div>

        <div className="container_inputs">
          <input
            className="inputs_reto"
            id="first_input"
            style={{ width: "80px", height: "35px", borderRadius: "20px" }}
            type="text"
            value={tipoValue}
            onChange={(e) => setTipoValue(e.target.value)}
            onBlur={handleBlurTipo}
          />
          <input
            className="inputs_reto"
            id="second_input"
            style={{ width: "120px", height: "35px", borderRadius: "20px" }}
            type="text"
            value={nombreValue}
            onChange={(e) => setNombreValue(e.target.value)}
            disabled={fase < 2}
            onBlur={handleBlurNombre}
          />

          <span style={{ fontSize: "30px" }}> = </span>
          <input
            className="inputs_reto"
            id="third_input"
            style={{ width: "80px", height: "35px", borderRadius: "20px" }}
            type="number"
            value={valorValue}
            onChange={(e) => setValorValue(e.target.value)}
            disabled={fase < 3}
            onBlur={handleBlurValor}
          />
        </div>
        <div>
          {showModalError && (
            <ModalPartes
              onClosePartesVariable={() => setShowModalError(false)}
            />
          )}
          {isModalOpenPartesVariable && (
            <FelicidadesUno
              onClose={() => setIsModalOpenPartesVariable(false)}
              onContinue={() => navigate("/")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
