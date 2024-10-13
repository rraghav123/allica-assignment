function CharacterDetails({ label, value, valueTestId = "value" }) {
  return (
    <div className="flex gap-2">
      <p className="text-slate-400 text-xs" data-testid="label">
        {label}
      </p>
      <p className="text-slate-300 text-xs uppercase" data-testid={valueTestId}>
        {value}
      </p>
    </div>
  );
}
export default CharacterDetails;
