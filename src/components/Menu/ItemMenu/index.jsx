import "./style.css";
import { useNavigate } from "react-router-dom";

const ItemMenu = ({ img, isDisabled, goto = "/aprendizaje/1" }) => {
  let navigate = useNavigate();

  const handleCLick = () => {
    if (isDisabled) {
      return;
    }
    navigate(goto);
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
      <img src={img} style={{ opacity: isDisabled ? 0.4 : 1, width: "80px" }} />
    </div>
  );
};
export default ItemMenu;
