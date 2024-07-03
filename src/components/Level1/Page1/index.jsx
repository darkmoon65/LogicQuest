import { useNavigate } from "react-router-dom";
import TopBar from "../TopBar";

const Page1 = () => {
  let navigate = useNavigate();
  return (
    <div style={{ color: "white" }}>
      <TopBar />
      Pagina 1<span> content </span>
      <button onClick={() => navigate("/aprendizaje/2")}>
        Go to page 2 xd
      </button>
    </div>
  );
};
export default Page1;
