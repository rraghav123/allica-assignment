import { useLocation } from "react-router-dom";
import { useGetCharacterDetails } from "../../../generalQuery.js";
import CharacterDetailsItem from "../../atoms/CharacterDetailsItem";
import Loader from "../../atoms/Loader/index.jsx";
import HomePlanet from "../../molecules/HomePlanet/index.jsx";
import MoviesList from "../../molecules/MoviesList/index.jsx";
import "./index.css";

import { STATICS } from "../Characters/Statics.js";

function Details() {
  const { state } = useLocation();
  const id = state?.id;
  const { data, isLoading } = useGetCharacterDetails(id);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-4 border-x border-y opacity-90 bg-slate-900 mt-10 rounded-lg">
      <p className="details-character-name text-slate-200 text-5xl text-transparent uppercase">
        {data?.name}
      </p>
      <div className="details-character__detailsList mt-4">
        {STATICS.DATA_TO_SHOW.map(({ label, key }) => (
          <CharacterDetailsItem label={label} value={data?.[key]} key={key} />
        ))}
        <HomePlanet id={id} />
        <MoviesList films={data?.films} />
      </div>
    </div>
  );
}

export default Details;
