import CharacterDetails from "../../atoms/CharacterDetails/index.jsx";
import EditableModal from "../EditableModal";

import { useEditable } from "../../../hooks/useEditable.js";

function CharacterDetail({ data }) {
  const { gender, setGender, isEditEnabled, setEditEnabled } = useEditable({
    gender: data?.gender,
  });

  return (
    <div
      data-testid="molecules-character-detail"
      className="p-2.5 bg-slate-800 m-4 rounded shadow-[0_0_0_1px_#ffffff1a]"
    >
      <div className="flex gap-4 justify-between">
        <CharacterDetails
          label="Gender: "
          value={gender}
          valueTestId="character-detail-gender"
        />
        <CharacterDetails label="DOB: " value={data.birth_year} />
      </div>
      <div className="flex justify-between">
        <button
          className="text-xs text-orange-400 text-end mt-2"
          onClick={handleEdit}
          data-testid="character-details-edit-button"
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
