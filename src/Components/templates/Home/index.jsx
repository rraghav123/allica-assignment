import Header from "../../molecules/Header/index.jsx";
import Characters from "../../organisms/Characters/index.jsx";

function Home() {
  return (
    <div className="h-full flex flex-col items-center">
      <Header />
      <Characters />
    </div>
  );
}

export default Home;
