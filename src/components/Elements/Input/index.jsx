const Input = ({ label, name, value, onChange, type }) => {
  return (
    <>
      <label htmlFor={name} className="block text-white text-sm mb-2">
        {label}
      </label>

      <input
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        value={value}
        className="text-sm border rounded-w-full w-full py-2 px-2 text-black placeholder:opacity-10"
      />
    </>
  );
};

export default Input;
