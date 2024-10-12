import { useGetCharacterHomePlanet } from "../../../generalQuery.js";
import CharacterDetailsItem from "../../atoms/CharacterDetailsItem/index.jsx";

function HomePlanet({ id }) {
  const { data, isLoading } = useGetCharacterHomePlanet(id);
  return (
    <CharacterDetailsItem
      label="Home Planet"
      value={data?.name}
      isLoading={isLoading}
    />
  );
}

export default HomePlanet;
