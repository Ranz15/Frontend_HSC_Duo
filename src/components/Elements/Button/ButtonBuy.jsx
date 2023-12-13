const ButtonBuy = ({ Bgcolor = "bg-black", children, onClick }) => {
  return (
    <>
      <button
        className={` p-5 h-10 flex items-center justify-center font-semibold rounded-sm ${Bgcolor} text-white text-xs hover:opacity-75`}
        type="submit"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonBuy;
