import { NavLink, Outlet } from 'react-router';
import Button from './Button';

const Services = () => {
  const activeLink = ({ isActive }) => {
    console.log(isActive);

    return isActive
      ? 'px-5 py-6 text-lg font-semibold border-b-2 border-[#db8f02]'
      : 'px-5 py-6 text-lg font-semibold ';
  };

  return (
    <>
      <section
        id="services"
        className="paddings innerWidth gird items-center relative "
      >
        <h1 className="text-3xl inline font-extrabold  sm:text-4xl md:text-6xl">
          Our{' '}
          <Button
            text={'Video Ediing'}
            px="6"
            py="6"
            className={'font-extrabold text-2xl md:text-5xl'}
          />{' '}
          services
        </h1>
        {/* services */}
        <div className="p-1 innerWidth h-fit  flex justify-center items-start gap-12 mt-12 flex-row md:p-6 lg:flex-row">
          {/* menues */}
          <div className="flex flex-col justify-center items-center  ">
            <NavLink to={'/services/pic'} className={activeLink}>
              Picture Editing
            </NavLink>
            <NavLink to={'/services/mot'} className={activeLink}>
              Motion Design
            </NavLink>
            <NavLink to={'/services/col'} className={activeLink}>
              Color Grading
            </NavLink>
            <NavLink to={'/services/pos'} className={activeLink}>
              Post Producing
            </NavLink>
          </div>

          {/* services */}
          <div>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
