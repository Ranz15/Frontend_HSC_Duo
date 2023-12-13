const Select = ({ label, name, value, value2, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="block text-white text-sm mb-2">
        {label}
      </label>

      <select
        name={name}
        onChange={onChange}
        className="bg-white text-sm border rounded-w-full w-full py-2 px-2 text-black placeholder:opacity-10"
      >
        <option value={value} className="">
          Pria
        </option>
        <option value={value2} className="">
          Wanita
        </option>
      </select>
    </>
  );
};

export default Select;
