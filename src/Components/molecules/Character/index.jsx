import { useNavigate } from "react-router-dom";

import CharacterDetail from "../CharacterDetail/index.jsx";

import { ROUTES } from "../../../router/index.js";
import "./index.css";

function Character({ data, id }) {
  const navigate = useNavigate();
  return (
    <a
      className="molecules-character character shadow-slate-800 shadow-sm h-64 w-64
        bg-slate-900 rounded-lg flex flex-col items-center justify-between cursor-pointer"
      onClick={() =>
        navigate(ROUTES.DETAILS, {
          state: { id },
        })
      }
    >
      <p className="molecules-character__name text-slate-300 text-3xl text-center mt-4">
        {data.name}
      </p>
      <CharacterDetail data={data} />
    </a>
  );
}

export default Character;
