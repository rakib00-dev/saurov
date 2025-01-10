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
  const loadingH1 = useRef();

  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        // loadingH1.current.classList.add = 'scale-125';
        setLoading(false);
      }, 3000);
      console.log(4000);
      // console.log((loadingH1.current.innerText = 'good'));
    });
  }, []);

  return (
    <>
      {loading ? (
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            delay: 4,
            type: 'spring',
          }}
          className="fixed z-50 top-0 left-0 bg-black h-screen w-screen  "
        >
          <motion.h1
            ref={loadingH1}
            initial={{ scale: 1, opacity: 1, fontSize: '1.5rem' }}
            animate={{ scale: 1, opacity: 1, fontSize: '2.5rem' }}
            transition={{
              delay: 4,
              type: 'spring',
            }}
            className="transition-all flex justify-center items-center h-4/5 font-bold background bg-transparent w-fit p-10 text-xl capitalize"
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
