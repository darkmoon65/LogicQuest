import { useRef, useCallback, useState, useEffect } from "react";
import ItemCloud from "./itemCloud";
import "./style.css";
import manoDeslizante from "../../../assets/mano_deslizante.gif";

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
        <img src={manoDeslizante} alt="felicidades" width={"70%"} />
      </div>
    </>
  );
};

export default NubeDrag;
