function InputField({ label, value, onChange, id, maxLength }) {
  return (
    <label htmlFor={id} className="cursor-pointer">
      <p className="text-2xl text-slate-300 mb-4" data-testid="input-label">
        {label}
      </p>
      <input
        data-testid="input-field"
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        maxLength={maxLength}
      />
    </label>
  );
}

export default InputField;
