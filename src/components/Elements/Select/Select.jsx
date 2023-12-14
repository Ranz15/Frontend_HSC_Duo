const Select = ({ label, name, value, value2, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="block text-black text-sm mb-2">
        {label}
      </label>

      <select name={name} onChange={onChange}>
        <option value={value} selected>
          Pria
        </option>
        <option value={value2}>Wanita</option>
      </select>
    </>
  );
};

export default Select;
