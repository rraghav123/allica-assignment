import { useGetCharactersList } from "../../../generalQuery.js";

import Loader from "../../atoms/Loader/index.jsx";
import Character from "../../molecules/Character/index.jsx";

import "./index.css";

function Characters() {
  const { data, isLoading } = useGetCharactersList();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className="containerlg:p-10 xl:p-10 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4 gap-4 items-center  justify-center organisms_characters__container no-scrollbar mb-10"
    >
      {data?.results.map((character, index) => (
        <Character data={character} key={character.name} id={index + 1} />
      ))}
    </div>
  );
}

export default Characters;
