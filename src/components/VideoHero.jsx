import Button from './Button';

const VideoHero = () => {
  return (
    <section className="w-full h-full relative ">
      <div className="bg-gradient-to-b from-[#00000044] to-[#ecb29b8c] w-full h-full absolute"></div>
      <video
        autoPlay
        muted
        loop
        className="w-full h-[80vh] inset-0 scale-[3.5] md:scale-100 md:h-auto "
      >
        <source
          src="./assets/videos/videohero/videohero.mp4"
          type="video/mp4"
        />
        <source
          src="./assets/videos/videohero/videohero.webm"
          type="video/webm"
        />
      </video>
      {/* content */}
      <div className="p-2 absolute flex flex-col justify-center items-center top-0 left-0 mt-40 line leading-[6.5rem] w-full md:justify-start md:items-start md:p-8">
        <h3 className="font-roboto text-lg text-center uppercase md:text-3xl md:text-start">
          editor - producer - colorist
        </h3>
        <h1 className="text-2xl leading-10 md:w-[45rem] md:text-6xl ">
          Cinematic brand stories optimized to engage
        </h1>
        <div className="flex flex-row scale-75 w-full">
          <a href="flex">
            <Button text={'My Resume'} />
          </a>
          <a href="flex">
            <Button text={'Watch Some Video Now'} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
