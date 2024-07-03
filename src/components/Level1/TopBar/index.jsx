import ImgHouse from "../../../assets/icon_home.png";
import { useNavigate } from "react-router-dom";
const TopBar = () => {
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")} style={{ backgroundColor: "blue" }}>
        <img src={ImgHouse} />
      </button>
    </div>
  );
};

export default TopBar;
