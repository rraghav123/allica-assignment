import { useNavigate } from "react-router-dom";
import "./index.css";
function BackButton() {
  const navigate = useNavigate();
  return (
    <a
      data-testid="header-back-button"
      className="text-6xl text-slate-300 cursor-pointer"
      onClick={() => navigate(-1)}
    >
      &laquo;
    </a>
  );
}

export default BackButton;
