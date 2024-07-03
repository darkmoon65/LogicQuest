import "./style.css";
import { useNavigate } from "react-router-dom";

const ItemMenu = ({ img, isDisabled }) => {
  let navigate = useNavigate();

  const handleCLick = () => {
    if (isDisabled) {
      return;
    }
    navigate("/aprendizaje/1");
  };
  return (
    <div
      className="rounded"
      style={
        isDisabled
          ? { backgroundColor: "#8f8f8f" }
          : { backgroundColor: "white", width: "130px", height: "130px" }
      }
      onClick={handleCLick}
    >
      <img src={img} style={{ opacity: isDisabled ? 0.4 : 1 }} />
    </div>
  );
};
export default ItemMenu;
