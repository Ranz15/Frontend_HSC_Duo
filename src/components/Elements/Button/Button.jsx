const Button = ({
  btnUI = "btn-primary",
  children,
  onClick,
  width = "w-auto",
}) => {
  return (
    <>
      <button
        className={`btn ${btnUI} ${width} h-5 px-6 font-semibold rounded-md text-white sm:btn-sm md:btn-md`}
        type="submit"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
