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
      <label htmlFor={name} className={`block inputText text-sm mb-2`}>
        {label}
      </label>

      <input
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        value={value}
        className={`text-sm border rounded-w-full w-full py-2 px-2 placeholder:opacity-10 ${inputBg} ${inputText}`}
      />
    </>
  );
};

export default Input;
