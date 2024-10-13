import DetailsLoader from "../DetailsLoader/index.jsx";

function CharacterDetailsItem({ label, value, isLoading = false }) {
  return (
    <div className="flex items-center" data-testid="CharacterDetailsItem">
      <p className="text-slate-300 text-2xl" data-testid="label">
        {label}
      </p>
      {isLoading ? (
        <div className="flex ml-3" data-testid="loader">
          <DetailsLoader />
        </div>
      ) : (
        <p
          className="text-slate-200 text-2xl capitalize"
          data-testid="value"
        >{`: ${value}`}</p>
      )}
    </div>
  );
}

export default CharacterDetailsItem;
