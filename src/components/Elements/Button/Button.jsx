const Button = ({ Bgcolor = "bg-black", children, onClick }) => {
  return (
    <>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${Bgcolor} text-white`}
        type="submit"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
