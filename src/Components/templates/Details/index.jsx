import Header from "../../molecules/Header/index.jsx";
import Details from "../../organisms/Details/index.jsx";

function DetailsTemplate() {
  return (
    <div className="h-full flex flex-col items-center">
      <Header />
      <Details />
    </div>
  );
}

export default DetailsTemplate;
