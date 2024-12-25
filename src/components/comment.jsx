// services section
<section
  id="services"
  className="paddings innerWidth gird items-center relative "
>
  {/* head */}
  {/* <img
  loading="lazy"
  src="./assets/images/services/arrow.png"
  alt=""
  className={`absolute right-0 top-[-11rem] w-[20rem] hidden md:block ${arroClass}`}
/> */}
  <h1 className="text-3xl inline font-extrabold  sm:text-4xl md:text-6xl">
    Our{' '}
    <Button
      text={'Video Ediing'}
      px="6"
      py="6"
      className={'font-extrabold text-2xl md:text-5xl'}
    />{' '}
    services
  </h1>
  {/* cards */}
  <div className="p-1 innerWidth w-4/5 flex justify-center items-center gap-12 mt-12 flex-col md:p-6 lg:flex-row">
    {/* card1 */}
    <Card title="Basic">
      <li>{'>'} Cutting and trimming clips</li>
      <li>{'>'} Arranging video footage in a timeline</li>
      <li>{'>'} Adding transitions between clips</li>
      <li>{'>'} Basic color correction</li>
      <li>{'>'} Audio enhancements</li>
    </Card>

    {/* card2 */}
    <Card title="Standard" price={70}>
      <li>
        {'>'}{' '}
        <span className="text-[#ca5c30] text-lg font-extrabold">Basic</span>{' '}
      </li>
      <li>{'>'} Cutting and trimming clips</li>
      <li>{'>'} Arranging video footage in a timeline</li>
      <li>{'>'} Adding transitions between clips</li>
      <li>
        {'>'} Basic color correction{'  '}
        <span className="text-[#ca5c30] text-md">...& More</span>{' '}
        {/* text-[#ecb29b] */}
      </li>
    </Card>

    {/* card3 */}
    <Card title="Premium" crown={'👑'} price={200}>
      <li>
        {'>'}{' '}
        <span className="text-[#ca5c30] text-lg font-bold">
          {/* text-[#ecb29b] */}
          Basic + Standerd
        </span>{' '}
      </li>
      <li>{'>'} Special effects and animations</li>
      <li>{'>'} Advanced color grading</li>
      <li>{'>'} Custom transitions and effects</li>
      <li>
        {'>'} (VFX){' '}
        <span className="text-[#ca5c30] text-md">...& Much More</span>{' '}
        {/* text-[#ecb29b] */}
      </li>
    </Card>
  </div>
</section>;

// ⬆️ services cards
