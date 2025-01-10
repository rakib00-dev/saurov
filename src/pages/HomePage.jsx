import Companies from '../components/Companies';
import CountsOfWork from '../components/CountsOfWork';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import LandingService from '../components/LandingService';
import VideoHero from '../components/VideoHero';

const HomePage = () => {
  return (
    <>
      <VideoHero />
      <Header />
      <Companies />
      <CountsOfWork />
      <Projects children={<ProjectEle />} />
      <LandingService />
      <About />
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
