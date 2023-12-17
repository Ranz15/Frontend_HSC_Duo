const Skeleton = ({ cards, children }) => {
  return Array(cards)
    .fill(0)
    .map((e) => <div className="skeleton w-72 h-96">{children}</div>);
};
export default Skeleton;

// {skeleton w-44 h-64 shadow-lg border-2 gap-5 md:w-60 md:h-80 lg:w-full lg:h-80 xl:}
