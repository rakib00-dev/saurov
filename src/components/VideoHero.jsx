const VideoHero = () => {
  return (
    <section className="w-full h-full">
      <video autoPlay muted loop className="min-w-full min-h-full">
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
