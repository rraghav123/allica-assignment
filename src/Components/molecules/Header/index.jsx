import img from "/src/assets/logo.png";
function Header() {
  return (
    <div className="p-5  border-b border-orange-400 w-full bg-slate-950 opacity-90">
      <figure className="m-0 flex align-center justify-center">
        <img src={img} alt="StarWars" className="h-16" />
      </figure>
    </div>
  );
}

export default Header;
