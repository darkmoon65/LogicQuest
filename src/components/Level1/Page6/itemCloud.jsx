import { useCallback, useEffect, useRef } from "react";

const ItemCloud = ({ text, handleTouchEnd }) => {
  const refItem = useRef(null);

  const handleTouchStart = (event) => {
    event.preventDefault();
    const touch = event.touches[0];

    refItem.current.style.position = "absolute";
    refItem.current.style.zIndex = "1000";
    refItem.current.style.left = touch.clientX + "px";
    refItem.current.style.top = touch.clientY + "px";
  };
  const handleTouchMove = (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    refItem.current.style.left = touch.clientX + "px";
    refItem.current.style.top = touch.clientY + "px";
  };

  useEffect(() => {
    if (!text) {
      return;
    }
    const itemSpan = refItem.current;
    itemSpan.addEventListener("touchstart", handleTouchStart);
    itemSpan.addEventListener("touchmove", handleTouchMove);
    itemSpan.addEventListener("touchend", handleTouchEnd);
    return () => {
      itemSpan.removeEventListener("touchstart", handleTouchStart);
      itemSpan.removeEventListener("touchmove", handleTouchMove);
      itemSpan.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      {text && (
        <span className="draggable" draggable="true" ref={refItem}>
          {text}
        </span>
      )}
    </>
  );
};

export default ItemCloud;
