const Input = ({
  label,
  name,
  value,
  onChange,
  type,
  inputBg = "bg-white",
  inputText = "text-black",
}) => {
  return (
    <>
      <label htmlFor={name} className="block text-sm mb-2">
        {label}
      </label>

      <input
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        value={value}
        className={`${inputBg} text-sm border rounded-w-full w-full py-2 px-2 ${inputText} placeholder:opacity-10`}
      />
    </>
  );
};

export default Input;
