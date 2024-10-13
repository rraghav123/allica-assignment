import { useState } from "react";
import InputField from "../../atoms/InputField/index.jsx";

function EditableModal({ setGender, gender, setEditEnabled }) {
  const [tempGender, setTempGender] = useState(gender);
  return (
    <div
      data-testid="modelcules-editable-modal"
      className="absolute inset-0 z-10 flex justify-center items-center cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      <span className="fixed inset-0 bg-black bg-opacity-75 z-10" />
      <div
        className="bg-slate-950 p-4 z-20 w-64 h-64 relative flex justify-center
      items-center flex-col gap-4  shadow-orange-400
      shadow-[0_0_4px_0_rgba(255,255,255,0.3)]
      "
      >
        <span
          data-testid="editable-modal-close-btn"
          className="absolute text-slate-300 text-2xl top-0 right-0 p-4 cursor-pointer"
          onClick={() => setEditEnabled(false)}
        >
          X
        </span>
        <p className="text-2xl text-slate-300">Edit Details</p>

        <InputField
          value={tempGender}
          onChange={setTempGender}
          label="Change Gender"
          id="changeGender"
          maxLength={15}
        />
        <button
          data-testid="editable-modal-save-btn"
          className={`text-orange-400 text-md
              ${tempGender.length ? "" : "opacity-50"}
              ${tempGender.length ? "cursor-pointer" : "cursor-default"}
          `}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );

  function handleSave() {
    if (tempGender) {
      setGender(tempGender);
      setEditEnabled(false);
    }
  }
}

export default EditableModal;
