import React from 'react';
import Project from '../components/Projects';

const ProjectsPage = () => {
  return <Project children={<VideoElement />} classN={'grid'} />;

  function VideoElement() {
    return (
      <>
        <iframe
          src="https://drive.google.com/file/d/1o-4nCPCE8jdXuTNGn2KPkbL4AA8_tMsf/preview"
          width="450"
          height="280"
          allow="autoplay"
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/1o-4nCPCE8jdXuTNGn2KPkbL4AA8_tMsf/preview"
          width="450"
          height="280"
          allow="autoplay"
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/1o-4nCPCE8jdXuTNGn2KPkbL4AA8_tMsf/preview"
          width="450"
          height="280"
          allow="autoplay"
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/1o-4nCPCE8jdXuTNGn2KPkbL4AA8_tMsf/preview"
          width="450"
          height="280"
          allow="autoplay"
        ></iframe>
      </>
    );
  }
};

export default ProjectsPage;
