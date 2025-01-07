import { FaPlay } from 'react-icons/fa';
import Button from './Button';

const VideoHero = () => {
  return (
    <section className="w-full h-full relative overflow-hidden">
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
      <div className="p-2 gap-10 absolute flex flex-col justify-center items-center top-0 left-0 mt-32 line leading-[2.5rem] w-full md:justify-start md:items-start md:p-8 md:mt-40">
        <h3 className="font-roboto text-sm text-center font-bold uppercase md:text-xl md:text-start">
          editor - producer - colorist
        </h3>
        <h1 className="text-center text-4xl  md:w-[45rem] md:text-6xl md:text-start">
          Cinematic brand stories optimized to engage
        </h1>
        <div className=" w-full flex justify-center items-center flex-col scale-75 gap-4 md:scale-105 md:flex-row md:items-start md:justify-start md:px-8">
          <a className="flex font-sm justify-center items-center gap-2">
            <Button text={'My Resume'} border="full" />
          </a>
          <a className="">
            <Button
              text={'Watch Some Video Now'}
              border="full"
              className={'flex font-sm justify-center items-center gap-2'}
            >
              <FaPlay className="p-0" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
