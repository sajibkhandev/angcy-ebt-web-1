const Container = ({ className, children }) => {
  return (
    <div className={`${className} lg:max-w-[1320px] max-w-[580px] mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
