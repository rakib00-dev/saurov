import React from 'react';
import Project from '../components/Projects';

const ProjectsPage = () => {
  return <Project children={<VideoElement />} classN={'flex'} />;

  function VideoElement() {
    return (
      <>
        <div className="flex flex-col gap-6 top-0 relative">
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
        </div>

        {/* shorts */}
        <div className="grid grid-cols-2 gap-2 w-full md:gap-6 md:grid-cols-1">
          <iframe
            src="https://drive.google.com/file/d/1o-4nCPCE8jdXuTNGn2KPkbL4AA8_tMsf/preview"
            height="290"
            // width="180"
            className=" w-11/12 md:w-[11.25rem] "
            allow="autoplay"
          ></iframe>
          <iframe
            src="https://drive.google.com/file/d/1o-4nCPCE8jdXuTNGn2KPkbL4AA8_tMsf/preview"
            height="290"
            // width="180"
            className=" w-11/12 md:w-[11.25rem] "
            allow="autoplay"
          ></iframe>
          <iframe
            src="https://drive.google.com/file/d/1o-4nCPCE8jdXuTNGn2KPkbL4AA8_tMsf/preview"
            height="290"
            // width="180"
            className=" w-11/12 md:w-[11.25rem] "
            allow="autoplay"
          ></iframe>
          <iframe
            src="https://drive.google.com/file/d/1o-4nCPCE8jdXuTNGn2KPkbL4AA8_tMsf/preview"
            height="290"
            // width="180"
            className="  w-11/12 md:w-[11.25rem] "
            allow="autoplay"
          ></iframe>
        </div>
      </>
    );
  }
};

export default ProjectsPage;
