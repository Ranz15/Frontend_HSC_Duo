const Button = ({ Bgcolor = "bg-black", children, onClick, width }) => {
  return (
    <>
      <button
        className={`h-10 flex flex-row items-center justify-center px-6 font-semibold rounded-md ${Bgcolor} ${width} text-white hover:opacity-75`}
        type="submit"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
