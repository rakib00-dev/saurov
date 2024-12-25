const ServicesCardCom = ({ src, children }) => {
  return (
    <>
      <div className="w-[550px]">
        <img src={src} alt={src} className="w-full" />
      </div>
      <ul className="mt-8">{children}</ul>
    </>
  );
};

export default ServicesCardCom;
