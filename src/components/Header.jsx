import Button from './Button';
import { motion } from 'motion/react';

const Header = () => {
  return (
    <div className="hero min-h-screen relative  ">
      {/* *:text-[#d5d1c5] */}
      {/* <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 1,
          type: 'spring',
        }}
        className="absolute top-14 border border-y-2 rounded-3xl p-2 text-[0.6rem]  md:text-lg "
        style={{ borderColor: 'var(--border)' }}
      >
        Cinematic Editing Services, Creative Video Production, & More
      </motion.div> */}

      {/* header image content */}
      <div className="paddings innerWidth flexCenter hero-content justify-around gap-22 mt-32 flex-col sm:flex-row lg:flex-nowrap lg:flex-row-reverse">
        {/* blur effect */}
        <div
          className=" h-80 w-80 blur-[220px] z-[-1] absolute"
          style={{ background: 'var(--logo-gradient)' }}
        ></div>

        {/* hero image */}
        <motion.div
          initial={{ scale: 0.8, x: 150, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            type: 'spring',
          }}
          className="relative rounded-lg  border-solid border-[#ac17626d] border w-[24rem] h-[13.5rem] shadow-2xl  "
        >
          {/* <motion.iframe
            initial={{ scale: 0.8, x: 100, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              type: 'spring',
            }}
            src="https://drive.google.com/file/d/1o-4nCPCE8jdXuTNGn2KPkbL4AA8_tMsf/preview"
            width="540"
            height="280"
            allow="autoplay"
            className="rounded-lg shadow-2xl bg-center w-full h-full"
          ></motion.iframe> */}
          <motion.video
            initial={{ scale: 0.8, x: 100, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              type: 'spring',
            }}
            width="540"
            height="280"
            allow="autoplay"
            className="rounded-lg shadow-2xl bg-center w-full h-full"
            controls
            autoPlay
            muted
            loop
          >
            <source src="./assets/videos/saurov.mp4" type="video/mp4" />
          </motion.video>
          {/* <motion.img
            initial={{ scale: 0.8, x: 100, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              type: 'spring',
            }}
            src="./assets/images/hero/hero2.jpg"
            className="rounded-lg shadow-2xl bg-center w-full h-full"
          /> */}
        </motion.div>

        {/* hero content */}
        <motion.div
          initial={{ scale: 0.8, x: -100, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            type: 'spring',
          }}
          className="w-full  md:w-1/2"
        >
          <h1 className="text-2xl font-bold  leading-tight lg:text-5xl">
            {/* text-white */}
            Cutting-Edge Creations: Where Your Vision Comes to Life
          </h1>
          <p className="py-6">
            "Cutting-Edge Creations: Where Your Vision Comes to Life" is a video
            editing agency dedicated to transforming raw footage into stunning
            visual experiences. Using the latest tools and techniques, we bring
            your ideas to life with creativity and precision, crafting
            captivating content for marketing, social media, and cinematic
            projects.{' '}
            <a href="#about">
              <span className="text-[#ecb29b]">...& More</span>
            </a>
          </p>
          <a href="#" className="flex  justify-start w-full">
            <Button
              text={'Book Your Call Now!'}
              fontSize={'xl 2xl'}
              border="full"
              className={'scale-90 hover:scale-125 md:scale-105'}
            ></Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
