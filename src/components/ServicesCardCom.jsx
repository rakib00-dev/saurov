const ServicesCardCom = ({ src, children }) => {
  return (
    <>
      <div className="w-[550px] flex justify-center items-center md:items-start">
        <img src={src} alt={src} className="w-3/4 md:4/5" />
      </div>
      <ul className="flex flex-col justify-center mt-8 text-sm m-auto w-96 md:text-lg md:w-full">
        {children}
      </ul>
    </>
  );
};

export default ServicesCardCom;
