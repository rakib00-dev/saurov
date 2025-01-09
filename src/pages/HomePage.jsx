import Companies from '../components/Companies';
import CountsOfWork from '../components/CountsOfWork';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import LandingService from '../components/LandingService';
import VideoHero from '../components/VideoHero';
import { motion } from 'motion/react';
import { useState } from 'react';

const HomePage = () => {
  const [loaded, setLoaded] = useState(true);

  return (
    <>
      {loaded ? (
        <motion.div className="fixed z-50 top-0 left-0 bg-red-500 h-screen w-screen  ">
          <motion.h1
            initial={{ scale: 0.8, x: 150, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              type: 'spring',
            }}
            className="flex justify-center items-center w-fit p-10 text-xl capitalize"
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
