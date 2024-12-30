const VideoHero = () => {
  return (
    <section className=" w-screen h-full fixed">
      <div className="bg-gradient-to-b from-[#00000044] to-[#ecb29b8c] w-full h-full absolute"></div>
      <video autoPlay muted loop className="w-full">
        <source
          src="./assets/videos/videohero/videohero.mp4"
          type="video/mp4"
        />
        <source
          src="./assets/videos/videohero/videohero.webm"
          type="video/webm"
        />
      </video>
    </section>
  );
};

export default VideoHero;
