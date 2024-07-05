import { useRef, useCallback, useState, useEffect } from "react";
import ItemCloud from "./itemCloud";
import "./style.css";
import manoDeslizante from "../../../assets/mano_deslizante2.gif";
import soundBueno from "../../../assets/complete_game.wav";
import soundMalo from "../../../assets/game_over.wav";

const initValues = {
  item1: "1",
  item2: "2,5",
  item3: "a",
  item4: "-3",
  item5: "4050",
  item6: "B",
  item7: "7,1",
  item8: "0",
};

const NubeDrag = ({ openModal, handleOk }) => {
  const [itemsOptions, setItemsOptions] = useState(initValues);
  const [itemsSelected, setItemsSelected] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [showHand, setShowHand] = useState(true);
  const refDivStore = useRef(null);
  const audioBueno = new Audio(soundBueno);
  const audioMalo = new Audio(soundMalo);

  const refresh = () => {
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true);
    }, 100);
  };

  const handleTouchEnd = useCallback((event) => {
    console.log(event);
    const rectInput = refDivStore.current.getBoundingClientRect();
    const rectDraggable = event.target.getBoundingClientRect();

    if (
      rectDraggable.left >= rectInput.left &&
      rectDraggable.right <= rectInput.right &&
      rectDraggable.top >= rectInput.top &&
      rectDraggable.bottom <= rectInput.bottom
    ) {
      let content = event.target.innerText;
      const regexInteger = /^-?\d+$/;
      if (!regexInteger.test(content)) {
        audioMalo.play();
        refresh();
        openModal();
        return;
      }
      setItemsOptions((prevItemsOptions) => {
        const nuevoItemsOptions = Object.fromEntries(
          Object.entries(prevItemsOptions).filter(
            ([key, value]) => value !== content
          )
        );
        return nuevoItemsOptions;
      });
      setItemsSelected((prev) => {
        return [...prev, content];
      });

      audioBueno.play();
    }
  }, []);

  useEffect(() => {
    if (itemsSelected.length === 4) {
      handleOk();
    }
  }, [itemsSelected]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHand(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isActive && (
        <div className="cloud">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              width: "80%",
            }}
          >
            <ItemCloud
              text={itemsOptions.item1}
              handleTouchEnd={handleTouchEnd}
            />
            <ItemCloud
              text={itemsOptions.item2}
              handleTouchEnd={handleTouchEnd}
            />
            <ItemCloud
              text={itemsOptions.item3}
              handleTouchEnd={handleTouchEnd}
            />
            <ItemCloud
              text={itemsOptions.item4}
              handleTouchEnd={handleTouchEnd}
            />
            <ItemCloud
              text={itemsOptions.item5}
              handleTouchEnd={handleTouchEnd}
            />
            <ItemCloud
              text={itemsOptions.item6}
              handleTouchEnd={handleTouchEnd}
            />
            <ItemCloud
              text={itemsOptions.item7}
              handleTouchEnd={handleTouchEnd}
            />
            <ItemCloud
              text={itemsOptions.item8}
              handleTouchEnd={handleTouchEnd}
            />
          </div>
          {showHand && (
            <img
              src={manoDeslizante}
              alt="mano_en_movimiento"
              className="hand-overlay"
            />
          )}
        </div>
      )}

      <div id="storage" className="storage">
        <h2>Enteros</h2>
        <div id="storage-content" className="storage-content" ref={refDivStore}>
          {itemsSelected.map((e) => (
            <span key={e} className="draggable">
              {e}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default NubeDrag;
