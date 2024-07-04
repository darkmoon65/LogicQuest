import { useCallback, useEffect, useRef } from "react";

const ItemCloud = ({ text, divStore }) => {
  const refItem = useRef(null);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];

    refItem.current.style.position = "absolute";
    refItem.current.style.zIndex = "1000";
    refItem.current.style.left = touch.clientX + "px";
    refItem.current.style.top = touch.clientY + "px";
  };
  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    refItem.current.style.left = touch.clientX + "px";
    refItem.current.style.top = touch.clientY + "px";
  };

  const handleTouchEnd = useCallback(() => {
    const rectInput = divStore.getBoundingClientRect();
    const rectDraggable = refItem.current.getBoundingClientRect();

    if (
      rectDraggable.left >= rectInput.left &&
      rectDraggable.right <= rectInput.right &&
      rectDraggable.top >= rectInput.top &&
      rectDraggable.bottom <= rectInput.bottom
    ) {
      console.lof("asdsadsa");
      //   input1.value = divEntero.innerText;
      //   divEntero.style.display = "none";
      //   input1.style.border = "none";
      //   input1.disabled = true;
      //   input1.style.backgroundColor = "white";
      //   phase2();
    }
  }, [divStore]);
  useEffect(() => {
    console.log(divStore);
    const itemSpan = refItem.current;
    itemSpan.addEventListener("touchstart", handleTouchStart);
    itemSpan.addEventListener("touchmove", handleTouchMove);
    itemSpan.addEventListener("touchend", handleTouchEnd);
    return () => {
      refItem.current.removeEventListener("touchstart", handleTouchStart);
    };
  }, [divStore]);
  return (
    <span className="draggable" draggable="true" ref={refItem}>
      {text}
    </span>
  );
};

export default ItemCloud;
