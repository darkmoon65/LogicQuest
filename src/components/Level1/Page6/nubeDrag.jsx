import { useRef, useCallback, useState, useEffect } from "react";
import ItemCloud from "./itemCloud";
import "./style.css";
import soundBueno from "../../../assets/complete_game.wav";
import soundMalo from "../../../assets/game_over.wav";

const initValues = {
  item1: "Cabeza",
  item2: "Tipo",
  item3: "Valor variable",
  item4: "Decimal",
  item5: "Nombre variable",
};
const NubeDrag = ({ openModal, handleOk }) => {
  const [itemsOptions, setItemsOptions] = useState(initValues);
  const [tipoValue, setTipoValue] = useState("");
  const [nombreValue, setNombreValue] = useState("");
  const [valorValue, setValorValue] = useState("");

  const [isActive, setIsActive] = useState(true);
  const [fase, setFase] = useState(1);
  const tipoRef = useRef(null);
  const nombreRef = useRef(null);
  const valorRef = useRef(null);
  const [showItems, setShowItems] = useState(true);

  const audioBueno = new Audio(soundBueno);
  const audioMalo = new Audio(soundMalo);

  const refresh = () => {
    console.log("refresh");
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true);
    }, 100);
  };
  const handleTouchEnd = useCallback(
    (event) => {
      console.log(event);
      let target = "Tipo";
      let rectInput = tipoRef.current.getBoundingClientRect();
      if (fase === 2) {
        rectInput = nombreRef.current.getBoundingClientRect();
        target = "Nombre variable";
      }
      if (fase === 3) {
        rectInput = valorRef.current.getBoundingClientRect();
        target = "Valor variable";
      }

      const rectDraggable = event.target.getBoundingClientRect();

      if (
        rectDraggable.left >= rectInput.left &&
        rectDraggable.right <= rectInput.right &&
        rectDraggable.top >= rectInput.top &&
        rectDraggable.bottom <= rectInput.bottom
      ) {
        let content = event.target.innerText;
        // const regexInteger = /^-?\d+$/;
        if (content !== target) {
          refresh();
          openModal();
          audioMalo.play();
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
        if (fase === 1) {
          setTipoValue(content);
        }
        if (fase === 2) {
          setNombreValue(content);
        }
        if (fase === 3) {
          setValorValue(content);
        }
        setFase((prev) => {
          return prev + 1;
        });
        audioBueno.play();
      }
    },
    [fase, setFase]
  );

  useEffect(() => {
    if (fase === 4) {
      handleOk();
    }
    setShowItems(false);
    setTimeout(() => {
      setShowItems(true);
    }, 50);
  }, [fase]);
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
            {showItems && (
              <>
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
              </>
            )}
          </div>
        </div>
      )}

      <div className="container_inputs">
        <div ref={tipoRef}>
          <input
            className="inputs_reto"
            id="first_input"
            style={{ width: "60px", height: "35px", borderRadius: "20px" }}
            type="text"
            value={tipoValue}
          />
        </div>
        <div ref={nombreRef}>
          <input
            className="inputs_reto"
            id="second_input"
            style={{ width: "140px", height: "35px", borderRadius: "20px" }}
            type="text"
            value={nombreValue}
            disabled={fase < 2}
          />
        </div>

        <span style={{ fontSize: "30px" }}> = </span>
        <div ref={valorRef}>
          <input
            className="inputs_reto"
            id="third_input"
            style={{ width: "130px", height: "35px", borderRadius: "20px" }}
            type="text"
            value={valorValue}
            disabled={fase < 3}
          />
        </div>
      </div>
    </>
  );
};

export default NubeDrag;
