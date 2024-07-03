import "./style.css";
const ItemMenu = ({ img, isDisabled }) => {
  return (
    <div
      className="rounded"
      style={
        isDisabled
          ? { backgroundColor: "#8f8f8f" }
          : { backgroundColor: "white", width: "130px", height: "130px" }
      }
    >
      <img src={img} style={{ opacity: isDisabled ? 0.4 : 1 }} />
    </div>
  );
};
export default ItemMenu;
