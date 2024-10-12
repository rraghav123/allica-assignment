function CharacterDetails({ label, value }) {
  return (
    <div className="flex gap-2">
      <p className="text-slate-600 text-xs">{label}</p>
      <p className="text-slate-600 text-xs ">{value}</p>
    </div>
  );
}
export default CharacterDetails;
