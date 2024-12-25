import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

const Companies = () => {
  const copmaniesLogo = [
    'https://cdn.sanity.io/images/k0dlbavy/production/276205623f6b72641a385571dbc7a92ed1a37a0a-90x32.svg?w=84&auto=format&h=30&fit=min',
    'https://cdn.sanity.io/images/k0dlbavy/production/63f970d590a12cdb6a6edfdc64068eb82964c75d-175x29.svg?w=181&auto=format&h=30&fit=min',
    'https://cdn.sanity.io/images/k0dlbavy/production/3603769e82eea5ee98bf0cb718ac3d94b66a5bb7-183x30.svg?w=305&auto=format&h=50&fit=min',
    'https://cdn.sanity.io/images/k0dlbavy/production/e02bfc7e1fb6a406654e1563d5727649cceec429-108x40.svg?w=189&auto=format&h=70&fit=min',
    'https://cdn.sanity.io/images/k0dlbavy/production/4a63d4bd5cd8bfdc5601b281d2095463317e6f9d-140x25.svg?w=280&auto=format&h=50&fit=min',
    'https://cdn.sanity.io/images/k0dlbavy/production/a2989e47223de53539e66f71e18474721c150fa4-122x33.svg?w=100&auto=format&h=27&fit=min',
    'https://cdn.sanity.io/images/k0dlbavy/production/9769bea1d422ff9340fd9b3ac2857bee54413069-155x44.svg?w=113&auto=format&h=32&fit=min',
    'https://cdn.sanity.io/images/k0dlbavy/production/4bfcde37d7d075c2d602d09d578f02aa4a2c9c6f-354x60.svg?w=136&auto=format&h=23&fit=min',
    'https://framerusercontent.com/images/1Z4tpXFZaiFmgmJ82pbywtM2Ybc.png',
    'https://motionify.co/wp-content/uploads/2024/10/tvs-credit-1.png',
  ];

  return (
    <div className="flex flex-row w-full justify-center items-center cursor-pointer">
      {/* cards */}
      <Splide
        options={{
          type: 'loop', // Loop back to the beginning when reaching the end
          autoScroll: {
            pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
            pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
            rewind: true, // Rewind to start when the end is reached
            speed: 1, // Scrolling speed
          },
          arrows: false, // Hide navigation arrows
          pagination: false, // Hide pagination dots
          fixedWidth: '445px', // Fixed width for each slide
          // Gap between slides
        }}
        extensions={{ AutoScroll }} // Use the AutoScroll extension
        className="paddings innerWith flex flex-row justify-center overflow-hidden"
      >
        {/* card */}
        {copmaniesLogo.map((src, i) => (
          <SplideSlide
            className="flex w-40 shadow-xl justify-center items-center md:w-80"
            key={i}
          >
            <img
              loading="lazy"
              src={src}
              alt="companies"
              className="rounded-sm h-6 filter invert(1) company-filter "
              // width={288}
              // height={}f
            />
          </SplideSlide>
        ))}
        {/* <img
          src="https://cdn.sanity.io/images/k0dlbavy/production/01dbf9ca610de17a0a6e6ac232698670e2432c61-398x280.svg?w=57&auto=format&h=40&fit=min"
          alt="companies"
          className="rounded-sm"
          width={100}
        /> */}
      </Splide>
    </div>
  );
};

export default Companies;
