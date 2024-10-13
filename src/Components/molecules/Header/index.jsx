import img from "/src/assets/logo.png";
import BackButton from "../../atoms/BackButton/index.jsx";

function Header({ showBack = false }) {
  return (
    <div className="p-5  border-b border-orange-400 w-full bg-slate-950 opacity-90 flex items-center justify-between">
      {showBack ? <BackButton /> : <span style={{ width: "38.38px" }} />}
      <figure className="m-0 flex align-center justify-center">
        <img src={img} alt="StarWars" className="h-16" />
      </figure>
      <span />
    </div>
  );
}

export default Header;
