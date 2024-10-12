import { useState } from "react";
import CharacterDetails from "../../atoms/CharacterDetails/index.js";
import EditableModal from "../EditableModal";

function CharacterDetail({ data }) {
  const [isEditEnabled, setEditEnabled] = useState(false);
  const [gender, setGender] = useState(data.gender);

  return (
    <div
      className={`p-2.5 bg-slate-200 m-4 rounded ${isEditEnabled ? "" : "molecules-character__details"}`}
    >
      <div className="flex gap-4 justify-between">
        <CharacterDetails label="Gender: " value={gender} />
        <CharacterDetails label="DOB: " value={data.birth_year} />
      </div>
      <div className="flex justify-between">
        <button
          className="text-xs text-orange-400 text-end mt-2"
          onClick={handleEdit}
        >
          Edit
        </button>
        <p className="text-xs text-orange-400 text-end mt-2">Read More</p>
      </div>
      {isEditEnabled ? (
        <EditableModal
          setGender={setGender}
          gender={gender}
          setEditEnabled={setEditEnabled}
        />
      ) : null}
    </div>
  );

  function handleEdit(e) {
    e.stopPropagation();
    setEditEnabled(true);
  }
}

export default CharacterDetail;
