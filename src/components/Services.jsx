import { NavLink, Outlet } from 'react-router';
import Button from './Button';

const Services = ({
  toPic = '/services/pic',
  toMot = '/services/mot',
  toCol = '/services/col',
  toPos = '/services/pos',
}) => {
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
        className="paddings innerWidth gird items-center relative overflow-hidden"
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
        <div className="p-1 innerWidth h-fit flex justify-center items-center mt-12 flex-col md:p-6 lg:flex-row lg:items-start">
          {/* menues */}
          <div className="flex flex-col justify-center items-center w-4/5gi md:w-1/3">
            <NavLink to={toPic} className={activeLink}>
              Picture Editing
            </NavLink>
            <NavLink to={toMot} className={activeLink}>
              Motion Design
            </NavLink>
            <NavLink to={toCol} className={activeLink}>
              Color Grading
            </NavLink>
            <NavLink to={toPos} className={activeLink}>
              Post Producing
            </NavLink>
          </div>

          {/* services */}
          <div className="grid place-content-center w-full md:place-content-start">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
