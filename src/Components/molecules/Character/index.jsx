import { useNavigate } from "react-router-dom";

import CharacterDetail from "../CharacterDetail/index.jsx";

import "./index.css";

import { ROUTES } from "../../../router/index.js";

function Character({ data, id }) {
  const navigate = useNavigate();
  return (
    <a
      data-testid="molecules-character"
      className="test-anchor shadow-slate-800 shadow-sm h-64 w-64
        translate-y-0 hover:translate-y-[-.5rem] transition-transform
        bg-slate-900 rounded-lg flex flex-col items-center justify-between cursor-pointer"
      onClick={() => {
        navigate(ROUTES.DETAILS, {
          state: { id },
        });
      }}
    >
      <p className="molecules-character text-4xl text-center mt-4 text-transparent uppercase">
        {data.name}
      </p>
      <CharacterDetail data={data} />
    </a>
  );
}

export default Character;
