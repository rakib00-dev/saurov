import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { motion, useScroll } from 'motion/react';
import Toggle from '../components/Toggle';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayout = () => {
  const [isChecked, setIsChecked] = useState(false);
  const isClickedFun = (e) => {
    setIsChecked(e.target.checked);
  };

  useEffect(() => {
    // theme
    const htmlTag = document.getElementById('html');
    const navTag = document.getElementById('nav');
    let allDiv = document.querySelectorAll('div');
    let allA = document.querySelectorAll('a');
    let allP = document.querySelectorAll('p');
    const companies = document.querySelectorAll('.company-filter');

    if (isChecked) {
      htmlTag.dataset.theme = 'retro';
      // navTag.dataset.theme = 'retro';
      allDiv.forEach((e) => {
        e.style.color = 'black';
      });
      allA.forEach((e) => {
        e.style.color = 'black';
      });
      allP.forEach((e) => {
        e.style.color = 'black';
      });
      companies.forEach((e) => {
        e.style.filter = 'invert(1)';
      });
      console.log('retro');
    } else {
      htmlTag.dataset.theme = 'dark';
      // navTag.dataset.theme = 'dark';
      allDiv.forEach((e) => {
        e.style.color = 'white';
      });
      allA.forEach((e) => {
        e.style.color = 'white';
      });
      allP.forEach((e) => {
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
          active
            ? 'sticky top-0 border-b-2 w-full border-[#3636367b] '
            : ' w-full'
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
