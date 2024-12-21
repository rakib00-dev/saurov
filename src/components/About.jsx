import Button from './Button';

const About = () => {
  return (
    <section
      id="about"
      className="paddings innerWidth gird items-center relative w-4/5 overflow-hidden rounded-2xl mb-10"
    >
      <h1 className="text-3xl flex gap-3 w-full font-extrabold justify-center sm:text-4xl md:text-6xl">
        Who {'   '}
        <span>
          <Button
            text={'We Are'}
            px="6"
            py="6"
            className={'font-extrabold text-2xl md:text-5xl'}
          />
        </span>
      </h1>
      {/* projects */}

      <div className="p-2 innerWidth w-4/5 flex justify-center items-center gap-12  mt-12">
        {/* about container */}
        <div className="flex h-fit w-4/5 justify-center items-center flex-col m-auto gap-6 lg:flex-row ">
          <img
            src="./assets/images/hero/hero4.jpg"
            alt="about image"
            className="relative rounded-xl h-auto w-auto md:h-[18rem] md:w-4/5 top-0"
          />
          {/* about content */}
          <div className="flex flex-col justify-around h-96 md:h-72">
            <h2 className="relative top-0 font-bold text-2xl text-transparent bg-[linear-gradient(41deg,_rgb(168_43_55)_0%,_rgb(255_208_190)_100%)] bg-clip-text mb-5 md:text-4xl text-grad">
              Bringing Your Vision to Life
            </h2>
            <p className="text-sm">
              {/* text-[#8c8b8b]  */}
              We are a video editing agency that turns raw footage into
              polished, professional videos. Our services include editing, color
              correction, sound design, motion graphics, and visual effects to
              create engaging content. We work closely with clients on marketing
              campaigns, social media, corporate videos, and personal projects,
              delivering high-quality videos that meet their goals and help
              brands stand out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
