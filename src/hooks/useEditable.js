import { useState } from "react";

function useEditable({ gender: initialGender }) {
  const [isEditEnabled, setEditEnabled] = useState(false);
  const [gender, setGender] = useState(initialGender);

  return {
    isEditEnabled,
    gender,
    setEditEnabled,
    setGender,
  };
}

export { useEditable };
