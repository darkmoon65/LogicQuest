import { useRef, useCallback, useState, useEffect } from "react";
import ItemCloud from "./itemCloud";
import "./style.css";

const initValues = {
  item1: "Cabeza",
  item2: "Tipo",
  item3: "Valor variable",
  item4: "Decimal",
  item5: "Nombre variable",
};
const NubeDrag = ({ openModal, handleOk }) => {
  const [itemsOptions, setItemsOptions] = useState(initValues);
  const [itemsSelected, setItemsSelected] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const refDivStore = useRef(null);

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
    }
  }, []);

  useEffect(() => {
    if (itemsSelected.length === 4) {
      handleOk();
    }
  }, [itemsSelected]);
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
          </div>
        </div>
      )}

      <div class="container_inputs">
        <input
          className="inputs_reto"
          id="first_input"
          style={{ width: "90px", height: "25px", borderRadius: "20px" }}
          type="text"
        />
        <input
          className="inputs_reto"
          id="second_input"
          style={{ width: "110px", height: "25px", borderRadius: "20px" }}
          type="text"
          disabled
        />
        <input
          className="inputs_reto"
          id="third_input"
          style={{ width: "90px", height: "25px", borderRadius: "20px" }}
          type="text"
          disabled
        />
      </div>
    </>
  );
};

export default NubeDrag;
