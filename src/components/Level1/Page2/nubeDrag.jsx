import ItemCloud from "./itemCloud";
import "./style.css";
const NubeDrag = ({ divStore }) => {
  return (
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
        <ItemCloud text={"1"} divStore={divStore} />
        <ItemCloud text={"2,5"} divStore={divStore} />
        <ItemCloud text={"a"} divStore={divStore} />
        <ItemCloud text={"-3"} divStore={divStore} />
        <ItemCloud text={"4050"} divStore={divStore} />
        <ItemCloud text={"B"} divStore={divStore} />
        <ItemCloud text={"7,1"} divStore={divStore} />
        <ItemCloud text={"0"} divStore={divStore} />
      </div>
    </div>
  );
};

export default NubeDrag;
