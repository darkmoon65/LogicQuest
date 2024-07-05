import React, { useState } from "react";

const boardSize = 6; // Tamaño del tablero

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

function GameProto() {
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
  const [housePosition] = useState({ x: 3, y: 5 });

  // Función para mover el gato
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

    // Verificar si la nueva posición está dentro del tablero y del camino
    if (
      newX >= 0 &&
      newX < boardSize &&
      newY >= 0 &&
      newY < boardSize &&
      pathCoordinates.some((coord) => coord.x === newX && coord.y === newY)
    ) {
      setCatPosition({ x: newX, y: newY });
    }

    // Verificar si el gato ha llegado a la casa
    if (newX === housePosition.x && newY === housePosition.y) {
      showModal();
    }
  };

  // Función para mostrar el modal cuando el gato llega a la casa
  const showModal = () => {
    // Aquí puedes implementar la lógica para mostrar un modal en React
    alert("¡El gato llegó a la casa!");
  };

  // Función para renderizar el tablero
  const renderBoard = () => {
    const cells = [];
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        let cellClass = "cell";
        if (i === catPosition.y && j === catPosition.x) {
          cellClass += " cat"; // Añadir clase para el gato
        } else if (i === housePosition.y && j === housePosition.x) {
          cellClass += " house"; // Añadir clase para la casa
        } else if (
          pathCoordinates.some((coord) => coord.x === j && coord.y === i)
        ) {
          cellClass += " path"; // Añadir clase para el camino
        }

        cells.push(<div key={`${i}-${j}`} className={cellClass}></div>);
      }
    }
    return cells;
  };

  return (
    <div className="App">
      <div className="game-board">{renderBoard()}</div>
      <div className="controls">
        <button onClick={() => move("up", 1)}>↑</button>
        <button onClick={() => move("down", 1)}>↓</button>
        <button onClick={() => move("left", 1)}>←</button>
        <button onClick={() => move("right", 1)}>→</button>
      </div>
    </div>
  );
}

export default GameProto;
