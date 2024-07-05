import ImgHouse from "../../assets/icon_home.png";
import bronce_medalla from "../../assets/bronce_medalla.png";
import plata_medalla from "../../assets/plata_medalla.png";
import gold_medalla from "../../assets/golde_medalla.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const TopBar = ({ advance }) => {
  let navigate = useNavigate();
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#007BD4",
          borderRadius: "100%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
      >
        <FontAwesomeIcon icon={faHome} style={{ color: "#fff" }} />
      </button>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "80%",
          }}
        >
          <div
            style={{
              height: "15px",
              backgroundColor: "#d9d9d9",
              position: "relative",
              borderRadius: "100px",
            }}
          >
            <span
              style={{
                height: "15px",
                borderRadius: "100px",
                backgroundColor: "green",
                width: `${advance}`,
                position: "absolute",
                zIndex: "100",
                top: "0",
                paddingLeft: "5px",
                textAlign: "center",
              }}
            >
              {advance}
            </span>
          </div>

          <div
            style={{
              marginLeft: "60px",
              width: "75%",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
            }}
          >
            <img src={bronce_medalla} height={"30px"} />
            <img
              src={plata_medalla}
              height={"30px"}
              style={{ filter: "saturate(1%)", opacity: 0.5 }}
            />
            <img
              src={gold_medalla}
              height={"30px"}
              style={{ filter: "saturate(1%)", opacity: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
