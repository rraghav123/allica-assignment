import DetailsLoader from "../DetailsLoader/index.jsx";

function CharacterDetailsItem({ label, value, isLoading = false }) {
  return (
    <div className="flex items-center">
      <p className="text-slate-300 text-2xl">{label}</p>
      {isLoading ? (
        <div className="flex ml-3">
          <DetailsLoader />
        </div>
      ) : (
        <p className="text-slate-200 text-2xl capitalize">{`: ${value}`}</p>
      )}
    </div>
  );
}

export default CharacterDetailsItem;
