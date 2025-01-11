const ServicesCardCom = ({ src, children }) => {
  return (
    <>
      <div className="w-[550px] flex justify-center items-center md:items-start">
        <img src={src} alt={src} className="w-1/2 md:4/5" />
      </div>
      <ul className="flex flex-col justify-center items-start mt-8 text-[.5rem] m-auto w-fit md:text-lg md:w-full">
        {children}
      </ul>
    </>
  );
};

export default ServicesCardCom;
