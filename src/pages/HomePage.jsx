import Companies from '../components/Companies';
import CountsOfWork from '../components/CountsOfWork';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import LandingService from '../components/LandingService';
import VideoHero from '../components/VideoHero';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(2);
  const loadingH1 = useRef();

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingH1.current.classList.add = 'scale-125';
        setLoading(false);
      }, 3000);
      // setCount((currentCount) => currentCount++);
      console.log(currentCount);
    });
  }, []);

  return (
    <>
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            delay: 3,
            type: 'spring',
          }}
          className="fixed z-50 top-0 left-0 bg-black w-screen h-screen"
        >
          <img
            src="https://i.gifer.com/Ir4.gif"
            alt=""
            className="opacity-100 absolute top-0 left-0 bg-center bg-cover h-screen w-full"
          />
          <motion.h1
            ref={loadingH1}
            initial={{
              // right: '-123px',
              scale: 0.7,
              opacity: 0.7,
              fontSize: '1.5rem',
            }}
            animate={{
              // right: '0px',
              scale: 1,
              opacity: 1,
              fontSize: ` 2.5rem`,
            }}
            transition={{
              delay: 2,
              type: 'spring',
            }}
            className="relative transition-all flex justify-center  text-center items-center h-4/5 font-bold text-transparent bg-[linear-gradient(41deg,_rgb(168_43_55)_0%,_rgb(255_208_190)_100%)] bg-clip-text w-fit p-10 text-xl capitalize md:text-4xl"
          >
            Wow Welcome At last you came to the right place{' '}
          </motion.h1>
        </motion.div>
      ) : (
        <>
          <VideoHero />
          <Header />
          <Companies />
          <CountsOfWork />
          <Projects children={<ProjectEle />} />
          <LandingService />
          <About />
        </>
      )}
    </>
  );

  function ProjectEle() {
    return (
      <>
        {/* first video */}
        <video
          controls
          className="rounded-xl h-[24rem] w-full lg:w-1/2 md:w-2/3 "
          autoPlay
          muted
          loop
        >
          <source
            src="./assets/videos/projects/YouTube-Talking-Head-style.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* second video */}
        <video
          controls
          className="rounded-xl h-96 w-full lg:w-1/2 md:w-2/3 "
          autoPlay
          muted
          loop
        >
          <source
            src="./assets/videos/projects/Animated-Health-Shorts.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </>
    );
  }
};

export default HomePage;
