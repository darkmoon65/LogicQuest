import ItemMenu from "./ItemMenu";
import ImgEstudiar from "../../assets/icon_estudiando.png";
import ImgPlay from "../../assets/icon_play.png";

const Menu = () => {
  return (
    <div>
      <div style={{ position: "absolute", top: "60px", left: "50px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={false} />
      </div>
      <div style={{ position: "absolute", top: "160px", left: "200px" }}>
        <ItemMenu img={ImgPlay} isDisabled={true} />
      </div>
      <div style={{ position: "absolute", top: "300px", left: "280px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={true} />
      </div>
      <div style={{ position: "absolute", top: "440px", left: "260px" }}>
        <ItemMenu img={ImgPlay} isDisabled={true} />
      </div>
      <div style={{ position: "absolute", top: "580px", left: "180px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={true} />
      </div>
      <div style={{ position: "absolute", top: "650px", left: "50px" }}>
        <ItemMenu img={ImgEstudiar} isDisabled={true} />
      </div>
    </div>
  );
};
export default Menu;
