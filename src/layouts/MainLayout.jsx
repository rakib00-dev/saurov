import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, useScroll } from 'motion/react';
import Toggle from '../components/Toggle';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
  const [isChecked, setIsChecked] = useState(true);
  const isClickedFun = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    // theme
    const htmlTag = document.getElementById('html');
    const navTag = document.getElementById('nav');
    let allElements = document.querySelectorAll('*');
    const companies = document.querySelectorAll('.company-filter');
    // const cardTitle = document.querySelectorAll('.card-title');

    console.log(companies);

    if (isChecked) {
      htmlTag.dataset.theme = 'retro';
      // navTag.dataset.theme = 'retro';
      allElements.forEach((e) => {
        e.style.color = 'black';
      });
      companies.forEach((e) => {
        e.style.filter = 'invert(1)';
      });
      console.log('retro');
    } else {
      htmlTag.dataset.theme = 'dark';
      // navTag.dataset.theme = 'dark';
      allElements.forEach((e) => {
        e.style.color = 'white';
      });
      companies.forEach((e) => {
        e.style.filter = 'invert(0)';
      });
      console.log('dark');
    }
  }, [isChecked]);

  // onScroll line
  const { scrollYProgress } = useScroll();

  const [active, setActive] = useState(false);

  window.addEventListener('scroll', () => {
    const navTag = document.getElementById('nav');
    const winYscroll = window.scrollY;
    if (winYscroll >= 92) {
      setActive(true);
    } else {
      return setActive(false);
    }
  });

  return (
    <>
      <Navbar
        className={
          active ? 'sticky top-0 z-10 border-b-2 border-[#3636367b]' : ''
        }
        toggle={<Toggle checkCheckBox={isClickedFun} />}
      >
        <motion.div
          style={{
            scaleX: scrollYProgress,
            height: '2px',
            width: '100%',
            position: 'absolute',
            left: '0',
            background: 'red',
          }}
        />
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
