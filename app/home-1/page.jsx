'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import useAccordion from '@/components/hooks/useAccordion';
import { Autoplay, Pagination } from 'swiper/modules';
import useTabs from '@/components/hooks/useTabs';
import RotatingWord from '@/components/Helper/RotatingWord';
import RotatingText from '@/components/Helper/RotatingWord';


import "swiper/css";
import "swiper/css/pagination";



function Home_1() {
  const [activeIndex, handleAccordion] = useAccordion(0);

  const [activeTab, handleTab] = useTabs();


  const slides = [
    "/assets/images/final-1/q1.webp",
    "/assets/images/final-1/q2.webp",
    "/assets/images/final-1/q3.webp",
    "/assets/images/final-1/q4.webp",
    "/assets/images/final-1/q5.webp",
    "/assets/images/final-1/q6.webp",
    "/assets/images/final-1/q7.webp",
    "/assets/images/final-1/q8.webp",
    "/assets/images/final-1/q9.webp",

  ];

  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Hero Section Start :::... */}
        <section id='section-hero'>
          <div className='relative z-[1] overflow-hidden rounded-bl-[30px] rounded-br-[30px] bg-colorLinenRuffle pb-20 pt-28 lg:rounded-bl-[50px] lg:rounded-br-[50px] lg:pb-24 lg:pt-32 xl:pt-40 xxl:pb-[133px] xxl:pt-[195px]'>
            <div className='global-container'>
              <div className='mb-14 flex flex-col items-center text-center lg:mb-20'>
                <h1 className='jos slide-from-bottom   max-w-[510px] lg:max-w-[768px] xl:max-w-[1076px]   
                leading-none text-[2.4rem]   md:text-[3rem] lg:text-[3.6rem] xl:text-[80px] 2xl:text-[96px] font-bold
                '>
                  AI Operating System for Your
                </h1>

                <div className=" mt-2  w-full flex justify-center ">
                  <  RotatingText
                    divClass=" text-center   
                     leading-none text-[2.4rem]   md:text-[3rem] lg:text-[3.6rem] xl:text-[80px] 2xl:text-[96px] font-bold "
                    pClass=" justify-center "  >

                    <span class="word  text-red-400  ">House.</span>
                    <span class="word  text-blue-400  ">Office.</span>
                    <span class="word  text-green-400  ">Business.</span>
                    <span class="word  text-cyan-400  ">Call Centres.</span>
                    <span class="word  text-purple-400  ">Enterprises.</span>
                    <span class="word  text-pink-400  ">Governance.</span>
                  </RotatingText>
                </div>

                <p className='jos slide-from-bottom mt-5 mb-7 max-w-[700px] text-lg font-semibold sm:text-xl xl:max-w-[980px]'>
                  CYBOKARFT is a futuristic  ecosystem offering intelligent, personalized AI Operating Systems across 9 Domains with Tesla 3-6-9 powered intelligence. .
                </p>

                <div
                  className='jos flex flex-wrap justify-center gap-6'
                  data-jos_animation='fade'
                >
                  <Link
                    href='#'
                    className='button rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorCyanBlue hover:border-colorCyanBlue hover:text-white'
                  >
                    Get started for free
                  </Link>
                  <Link
                    href='#'
                    className='button rounded-[50px] border-2 border-black bg-transparent py-4 text-black after:bg-colorCyanBlue hover:border-colorCyanBlue hover:text-white'
                  >
                    Learn more
                  </Link>
                </div>
              </div>

              <div
                className='jos hero-img overflow-hidden rounded-2xl bg-black'
                data-jos_animation='zoom'
              >
                <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  className="hero-swiper "
                >
                  {slides.map((img, i) => (
                    <SwiperSlide key={i}>

                      <Image
                        src={img}
                        alt={`hero-slide-${i}`}
                        width={1296}
                        height={640}
                        className="h-auto w-full      "
                      />

                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              
            </div>
            <div className='orange-gradient-1 absolute -right-[150px] top-[370px] -z-[1] h-[500px] w-[500px] animate-spin rounded-[500px]'></div>

            <div className='orange-gradient-2 absolute right-[57px] top-[620px] -z-[1] h-[450px] w-[450px] animate-spin rounded-[450px]'></div>
          </div>
        </section>
        {/*...::: Hero Section End :::... */}

        {/*...::: Service Section Start :::... */}
        <section id='section-service'>
          {/* Section Spacer */}
          <div className='pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mb-10 lg:mb-16 xl:mb-20'>
                <div className='md:max-w-sm lg:max-w-xl xl:max-w-[746px]'>
                  <h2>What is CYBOKARFT?</h2>
                </div>
              </div>
              {/* Section Content Block */}
              {/* Service List */}
              <ul className='jos grid grid-cols-1 gap-[2px] overflow-hidden rounded-[10px] border-2 border-black bg-black sm:grid-cols-2 lg:grid-cols-4'>
                {/* Service Item */}
                <li className='group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black'>
                  <div className='relative mb-9 h-[70px] w-[70px]'>
                    <Image
                      src='/assets/images/th-1/service-icon-black-1.svg'
                      alt=''
                      width='70'
                      height='70'
                    />
                    <Image
                      src='/assets/images/th-1/service-icon-orange-1.svg'
                      alt='service-icon-orange-1'
                      width='70'
                      height='70'
                      className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100'
                    />
                  </div>

                  <h3 className='mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]'>
                    <Link
                      href='/service-details'
                      className='hover:text-colorCyanBlue'
                    >
                      Personal AI-OS for Every Individual
                    </Link>
                  </h3>

                  <p className='mb-12 duration-300 group-hover:text-white'>
                    A personalized operating system that learns your lifestyle, automates routines, manages home activities, and enhances happiness through intelligent assistance.
                  </p>

                  <Link
                    href='/service-details'
                    className='relative inline-block h-[30px] w-[30px] duration-300'
                  >
                    <Image
                      src='/assets/images/th-1/arrow-right-black.svg'
                      alt='arrow-right-black'
                      width='30'
                      height='30'
                    />
                    <Image
                      src='/assets/images/th-1/arrow-right-orange.svg'
                      alt='arrow-right-black'
                      width='30'
                      height='30'
                      className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100'
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className='group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black'>
                  <div className='relative mb-9 h-[70px] w-[70px]'>
                    <Image
                      src='/assets/images/th-1/service-icon-black-2.svg'
                      alt='service-icon-black-2'
                      width='70'
                      height='70'
                    />
                    <Image
                      src='/assets/images/th-1/service-icon-orange-2.svg'
                      alt='service-icon-orange-1'
                      width='70'
                      height='70'
                      className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100'
                    />
                  </div>

                  <h3 className='mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]'>
                    <Link
                      href='/service-details'
                      className='hover:text-colorCyanBlue'
                    >
                      Smart Enterprises & Industrial Automation
                    </Link>
                  </h3>

                  <p className='mb-12 duration-300 group-hover:text-white'>
                    Boost business efficiency with automated workflows, AI-driven optimization, predictive analytics, and smart infrastructure management.
                  </p>

                  <Link
                    href='/service-details'
                    className='relative inline-block h-[30px] w-[30px] duration-300'
                  >
                    <Image
                      src='/assets/images/th-1/arrow-right-black.svg'
                      alt='arrow-right-black'
                      width='30'
                      height='30'
                    />
                    <Image
                      src='/assets/images/th-1/arrow-right-orange.svg'
                      alt='arrow-right-black'
                      width='30'
                      height='30'
                      className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100'
                    />
                  </Link>
                  {/* Features Item */}
                  {/* Features Item */}
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className='group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black'>
                  <div className='relative mb-9 h-[70px] w-[70px]'>
                    <Image
                      src='/assets/images/th-1/service-icon-black-3.svg'
                      alt='service-icon-black-3'
                      width='70'
                      height='70'
                    />
                    <Image
                      src='/assets/images/th-1/service-icon-orange-3.svg'
                      alt='service-icon-orange-3'
                      width='70'
                      height='70'
                      className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100'
                    />
                  </div>
                  <h3 className='mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]'>
                    <Link
                      href='/service-details'
                      className='hover:text-colorCyanBlue'
                    >
                      Unified Digital Government & Public Services
                    </Link>
                  </h3>

                  <p className='mb-12 duration-300 group-hover:text-white'>
                    From smart cities to citizen services, CYBOKARFT powers fast, transparent, secure, and intelligent governance for the future.
                  </p>

                  <Link
                    href='/service-details'
                    className='relative inline-block h-[30px] w-[30px] duration-300'
                  >
                    <Image
                      src='/assets/images/th-1/arrow-right-black.svg'
                      alt='arrow-right-black'
                      width='30'
                      height='30'
                    />
                    <Image
                      src='/assets/images/th-1/arrow-right-orange.svg'
                      alt='arrow-right-black'
                      width='30'
                      height='30'
                      className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100'
                    />
                  </Link>
                </li>
                {/* Service Item */}
                {/* Service Item */}
                <li className='group bg-white p-[30px] transition-all duration-300 ease-in-out hover:bg-black'>
                  <div className='relative mb-9 h-[70px] w-[70px]'>
                    <Image
                      src='/assets/images/th-1/service-icon-black-4.svg'
                      alt='service-icon-black-4'
                      width='70'
                      height='70'
                    />
                    <Image
                      src='/assets/images/th-1/service-icon-orange-4.svg'
                      alt='service-icon-orange-4'
                      width='70'
                      height='70'
                      className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100'
                    />
                  </div>
                  <h3 className='mb-4 block text-xl leading-tight -tracking-[0.5px] group-hover:text-white xl:text-2xl xxl:text-[28px]'>
                    <Link
                      href='/service-details'
                      className='hover:text-colorCyanBlue'
                    >
                      Healthcare, Education & Space Intelligence
                    </Link>
                  </h3>

                  <p className='mb-12 duration-300 group-hover:text-white'>
                    A single ecosystem that supports hospitals, schools, telecom, quantum computing, and even space technologies — intelligence that follows everywhere.
                  </p>

                  <Link
                    href='/service-details'
                    className='relative inline-block h-[30px] w-[30px] duration-300'
                  >
                    <Image
                      src='/assets/images/th-1/arrow-right-black.svg'
                      alt='arrow-right-black'
                      width='30'
                      height='30'
                    />
                    <Image
                      src='/assets/images/th-1/arrow-right-orange.svg'
                      alt='arrow-right-black'
                      width='30'
                      height='30'
                      className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 ease-linear group-hover:opacity-100'
                    />
                  </Link>
                </li>
                {/* Service Item */}
              </ul>
              {/* Service List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Service Section End :::... */}


        {/* WHAT IS CYBOKARFT 2 */}
        <section id="ecosystem" className="pb-20 xl:pb-32">
          <div className="global-container">
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <div>

                <p className="  text-lg max-w-prose">
                  CYBOKARFT is a metaverse-based AI Operating System ecosystem built to simplify life,
                  automate workflows, and elevate the global happiness index. We design personalized AI-OS
                  that learn your lifestyle, business needs, and responsibilities — performing tasks automatically behind the scenes.
                </p>


                <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-700">
                  {[
                    'Homes', 'Offices', 'Schools', 'Enterprises', 'Industries', 'Healthcare', 'Governments', 'Telecom', 'Internet', 'Space & Quantum Applications'
                  ].map((item) => (
                    <li key={item} className="flex text-lg items-start gap-3">
                      <span className="mt-1 h-3 w-3 rounded-full bg-black" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>


                <p className="mt-6 text-sm text-gray-600">From home to space—intelligence follows you everywhere.</p>
              </div>


              <div className="rounded-2xl bg-gradient-to-tr from-[#0EA5A4] to-[#7C3AED] p-8 text-white">
                <h3 className="text-2xl tracking-wide font-semibold">Inspired by Nikola Tesla’s 3-6-9 Rule</h3>
                <p className="mt-3">Nikola Tesla believed 3-6-9 holds the key to the universe. CYBOKARFT is engineered on the same universal intelligence.</p>


                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="text-4xl font-bold">3</div>
                    <div className="mt-2 font-semibold">Creation</div>
                    <div className="mt-1 text-sm">Foundation of every AI-OS</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="text-4xl font-bold">6</div>
                    <div className="mt-2 font-semibold">Energy</div>
                    <div className="mt-1 text-sm">Power source behind each domain</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg">
                    <div className="text-4xl font-bold">9</div>
                    <div className="mt-2 font-semibold">Completion</div>
                    <div className="mt-1 text-sm">Unified metaverse where systems align</div>
                  </div>
                </div>


                <p className="mt-6 text-sm">Every planet, every OS, every design element is built upon 3-6-9 energy architecture—creating flow, balance, and cosmic intelligence across the universe.</p>
              </div>
            </div>
          </div>
        </section>







        {/*...::: Content Section Start_1 :::... */}
        < section id='content-section-1' >
          {/* Section Spacer */}
          < div className='pb-20 xl:pb-[150px]' >
            {/* Section Container */}
            <div div className='global-container' >
              <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:gap-28 xxl:gap-32'>
                {/* Content Left Block */}
                <div
                  className='jos order-2 overflow-hidden rounded-xl md:order-1'
                  data-jos_animation='fade-left'
                >
                  <Image
                    src='/assets/images/final-1/nineverse.webp'
                    alt='content-image-1'
                    width='526'
                    height='450'
                    className='h-auto w-full'
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div
                  className='jos order-1 md:order-2'
                  data-jos_animation='fade-right'
                >
                  {/* Section Content Block */}
                  <div className='mb-6'>
                    <h2> Nine Planets. Nine Domains. One verse.</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className='text-lg leading-[1.4] lg:text-[21px]'>
                    <p className='mb-7 last:mb-0'>
                      In CYBOKARFT, every domain is represented as a planet.
                      Each planet contains its own operating system, powered by a unique type of energy and designed for a specific service sector.
                    </p>
                    {/* <p className='mb-7 last:mb-0'>
                      Advanced AI capabilities accessible to a broader audience,
                      including small & medium-sized businesses and individuals
                      who may not have the resources or expertise to develop.
                    </p> */}
                  </div>
                </div>
                {/* Content Right Block */}
              </div>
            </div >
            {/* Section Container */}
          </div >
          {/* Section Spacer */}
        </section >
        {/*...::: Content Section End_1 :::... */}

        {/*...::: Content Section Start_2 :::... */}
        <section id='content-section-2'>
          {/* Section Spacer */}
          <div className='pb-20 xl:pb-[150px]'>
            {/* Section Container */}
            <div className='global-container'>
              <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1.2fr)_1fr] xl:gap-28 xxl:gap-32'>
                {/* Content Left Block */}
                <div
                  className='jos order-2 overflow-hidden rounded-lg'
                  data-jos_animation='fade-left'
                >
                  <Image
                    src='/assets/images/final-1/whycybo.webp'
                    alt='content-image-2'
                    width='526'
                    height='450'
                    className='h-auto w-full'
                  />
                </div>
                {/* Content Left Block */}
                {/* Content Right Block */}
                <div className='jos order-1' data-jos_animation='fade-right'>
                  {/* Section Content Block */}
                  <div className='mb-6'>
                    <h2>Why CYBOKARFT?</h2>
                  </div>
                  {/* Section Content Block */}
                  <div className='text-lg leading-[1.4] lg:text-[21px]'>
                    {/* <p className='mb-7 last:mb-0'>
                      Our AI SaaS solutions can be quickly deployed, enabling
                      users to start benefiting from AI capabilities without
                      lengthy setup and development times in fast-paced
                      industries.
                    </p> */}
                    <ul className='flex flex-col gap-y-2 font-dmSans text-base leading-tight tracking-tighter   lg:mt-12 lg:text-lg'>
                      <li className='flex items-start gap-x-3'>
                        <div className='mt-[2.5px] h-[30px] w-[30px] aspect-[1/1]'>
                          <Image
                            src='/assets/images/th-1/check-circle.svg'
                            alt='check-circle'
                            width='30'
                            height='30'
                            className='h-full w-full   '
                          />
                        </div>
                        AI-powered life management
                      </li>

                      <li className='flex items-start gap-x-3'>
                        <div className='mt-[2.5px] h-[30px] w-[30px] aspect-[1/1]'>
                          <Image
                            src='/assets/images/th-1/check-circle.svg'
                            alt='check-circle'
                            width='30'
                            height='30'
                            className='h-full w-full   '
                          />
                        </div>
                        Unified dashboard for home + work + business
                      </li>

                      <li className='flex items-start gap-x-3'>
                        <div className='mt-[2.5px] h-[30px] w-[30px] aspect-[1/1]'>
                          <Image
                            src='/assets/images/th-1/check-circle.svg'
                            alt='check-circle'
                            width='30'
                            height='30'
                            className='h-full w-full   '
                          />
                        </div>
                        Predictive intelligence that solves problems before they appear
                      </li>
                      <li className='flex items-start gap-x-3'>
                        <div className='mt-[2.5px] h-[30px] w-[30px] aspect-[1/1]'>
                          <Image
                            src='/assets/images/th-1/check-circle.svg'
                            alt='check-circle'
                            width='30'
                            height='30'
                            className='h-full w-full   '
                          />
                        </div>
                        Future-ready, patent-backed technologies
                      </li>


                      <li className='flex items-start gap-x-3'>
                        <div className='mt-[2.5px] h-[30px] w-[30px] aspect-[1/1]'>
                          <Image
                            src='/assets/images/th-1/check-circle.svg'
                            alt='check-circle'
                            width='30'
                            height='30'
                            className='h-full w-full   '
                          />
                        </div>
                        Global-grade design for U.S./U.K./UAE audiences
                      </li>
                      <li className='flex items-start gap-x-3'>
                        <div className='mt-[2.5px] h-[30px] w-[30px] aspect-[1/1]'>
                          <Image
                            src='/assets/images/th-1/check-circle.svg'
                            alt='check-circle'
                            width='30'
                            height='30'
                            className='h-full w-full   '
                          />
                        </div>
                        Metaverse-driven architecture powered by 3-6-9 logic
                      </li>
                      <li className='flex items-start gap-x-3'>
                        <div className='mt-[2.5px] h-[30px] w-[30px] aspect-[1/1]'>
                          <Image
                            src='/assets/images/th-1/check-circle.svg'
                            alt='check-circle'
                            width='30'
                            height='30'
                            className='h-full w-full   '
                          />
                        </div>
                        International revenue model (Earn in USD)
                      </li>


                    </ul>
                  </div>
                </div>
                {/* Content Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Content Section End :::... */}

        {/*...::: Funfact Section Start :::... */}
        <section id='funfact-section'>
          <div className='mx-auto max-w-[1500px] px-5'>
            <div className='jos grid grid-cols-1 overflow-hidden rounded-[30px] bg-black lg:rounded-[50px] xl:grid-cols-[minmax(400px,_1fr)_1.5fr] xxl:grid-cols-[1fr_minmax(800px,_1fr)]'>
              {/* Funfact Left Block */}
              <div className='relative overflow-hidden rounded-[30px] lg:rounded-[50px]'>
                <Image
                  src='/assets/images/final-1/aipowerd.webp'
                  alt='funfact-image'
                  width='721'
                  height='784'
                  className='h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full'
                />
                {/* Video Play Button */}
                <Link
                  data-fslightbox='gallery'
                  rel='noopener noreferrer'
                  href='https://youtube.com/@cybokrafts?si=3M0NtSTEsZSxJHFh'
                  className='absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2'
                >
                  <div className='relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300 hover:bg-colorCyanBlue hover:text-white'>
                    Play
                    <div className='absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-gray-600 opacity-30'></div>
                  </div>
                </Link>
                {/* Video Play Button */}
              </div>
              {/* Funfacct Left Block */}

              {/* Funfact Right Block */}
              <div className='self-center px-6 py-16 sm:py-20 md:px-16 xl:px-10 xl:py-24 xxl:py-32 xxl:pl-16 xxl:pr-28'>
                {/* Section Content Block */}
                <div className='mb-8 lg:mb-16 xl:mb-6'>
                  <h2 className='text-white md:text-6xl text-4xl '>
                    AI-powered intelligence that simplifies life
                  </h2>
                </div>
                {/* Section Content Block */}
                <div className='text-left text-lg leading-[1.4] text-white lg:text-[21px]'>
                  <p className='mb-7 last:mb-0'>

                    CYBOKARFT adapts to your lifestyle, work demands, and ecosystem needs.
                    As your personal, business, or government requirements evolve, your AI-OS scales with you—ensuring that intelligence remains an advantage, not a burden.
                  </p>
                </div>
                {/* Horizontal Separator */}
                <div className='my-14 h-[1px] w-full bg-gray-300'></div>
                {/* Counter Scroll */}
                <ul className='flex flex-col justify-center gap-x-11 gap-y-8 text-center sm:flex-row md:text-left xl:justify-normal xl:text-left xxl:gap-x-20'>
                  {/* Counter Items */}
                  <li>
                    <h3
                      className='text-5xl text-colorCyanBlue md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]'
                      data-module='countup'
                    >
                      <span className='start-number' data-countup-number='92'>
                        92
                      </span>
                      %
                    </h3>
                    <span className='block text-lg font-normal text-white lg:text-[21px]'>
                      Customer service inquiries
                    </span>
                  </li>
                  {/* Counter Items */}
                  {/* Counter Items */}
                  <li>
                    <h3
                      className='text-5xl text-colorCyanBlue md:text-6xl lg:text-7xl xl:text-7xl xxl:text-[120px]'
                      data-module='countup'
                    >
                      <span className='start-number' data-countup-number='75'>
                        75
                      </span>
                      %
                    </h3>
                    <span className='block text-lg font-normal text-white lg:text-[21px]'>
                      Using financial institutions
                    </span>
                  </li>
                  {/* Counter Items */}
                </ul>
                {/* Counter Scroll */}
              </div>
              {/* Funfact Right Block */}
            </div>
          </div>
        </section>
        {/*...::: Funfact Section End :::... */}



        {/*...::: FAQ Section Start :::... */}
        <section className='faq-section py-20 md:py-28 '>
          {/* Section Spacer */}
          <div className='   '>
            {/* Section Container */}
            <div className='global-container'>
              <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2'>
                {/* FAQ Left Block */}
                <div
                  className='jos flex flex-col'
                  data-jos_animation='fade-right'
                >
                  {/* Section Content Block */}
                  <div className='mb-6'>
                    <div className='mx-auto md:mx-0 md:max-w-none'>
                      <h2>Freely ask us for more information</h2>
                    </div>
                  </div>
                  {/* Section Content Block */}
                  <div className='text-lg leading-[1.4] lg:text-[21px]'>
                    <p className='mb-7 last:mb-0'>
                      Understanding CYBOKARFT is easier when you have clarity. Below are some of the most common questions people ask about our AI-powered metaverse ecosystem, its inspiration, its global capabilities, and the technology behind it. These answers will help you explore how CYBOKARFT works, who it’s built for, and why it represents the future of intelligent operating systems.
                    </p>
                    <Link
                      href='/faq-1'
                      className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorCyanBlue hover:border-colorCyanBlue hover:text-white'
                    >
                      Ask you questions
                    </Link>
                  </div>
                </div>
                {/* FAQ Left Block */}

                {/* FAQ Right Block */}
                <div
                  className='jos md:ml-10 lg:ml-20 xl:ml-32'
                  data-jos_animation='fade-left'
                >
                  {/* Accordion*/}
                  <ul className='accordion'>
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${activeIndex === 0 ? 'active' : ''
                        }`}
                      onClick={() => handleAccordion(0)}
                    >
                      <div className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-2xl'>
                        <p>Q1. What exactly is CYBOKARFT?</p>
                        <div className='accordion-icon'>
                          <Image
                            src='/assets/images/plus.svg'
                            width={24}
                            height={24}
                            alt='plus'
                          />
                        </div>
                      </div>
                      <div className='accordion-content text-[#2C2C2C]'>
                        <p>
                          CYBOKARFT is a metaverse-based ecosystem of AI Operating Systems that connect home, work, business, education, finance, telecom, and space intelligence under one unified platform.
                        </p>
                      </div>
                    </li>
                    {/* Accordion items */}
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${activeIndex === 1 ? 'active' : ''
                        }`}
                      onClick={() => handleAccordion(1)}
                    >
                      <div className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-2xl'>
                        <p>Q2. How does Tesla’s 3-6-9 rule inspire CYBOKARFT?</p>
                        <div className='accordion-icon'>
                          <Image
                            src='/assets/images/plus.svg'
                            width={24}
                            height={24}
                            alt='plus'
                          />
                        </div>
                      </div>
                      <div className='accordion-content text-[#2C2C2C]'>
                        <p>
                          The entire system architecture—nine planets, energy flow, domain logic, and metaverse mechanics—is built using Tesla’s 3-6-9 numerical principles.
                        </p>
                      </div>
                    </li>
                    {/* Accordion items */}
                    {/* Accordion items */}
                    <li
                      className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${activeIndex === 2 ? 'active' : ''
                        }`}
                      onClick={() => handleAccordion(2)}
                    >
                      <div className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-2xl'>
                        <p>Q3. Who is CYBOKARFTdesigned for?</p>
                        <div className='accordion-icon'>
                          <Image
                            src='/assets/images/plus.svg'
                            width={24}
                            height={24}
                            alt='plus'
                          />
                        </div>
                      </div>
                      <div className='accordion-content text-[#2C2C2C]'>
                        <p>
                          Professionals, entrepreneurs, enterprises, tech-savvy adults, governments, and global high-value markets.
                        </p>
                      </div>
                    </li>
                  </ul>
                  {/* Accordion*/}
                </div>
                {/* FAQ Right Block */}
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: FAQ Section End :::... */}

        {/*...::: Testimonial Section Start :::... */}
        <section className='testimonial-section'>
          {/* Section Spacer */}
          <div className='bg-black pb-40 pt-20 xl:pb-[200px] xl:pt-[130px]'>
            {/* Section Container */}
            <div className='global-container'>
              {/* Section Content Block */}
              <div className='jos mb-10 text-center lg:mb-16 xl:mb-20'>
                <div className='mx-auto max-w-[30rem] lg:max-w-[60rem] xl:max-w-[68rem]'>
                  <h2 className='text-white'>
                    Real Experiences from CYBOKARFT Users
                  </h2>
                </div>
              </div>
              {/* Section Content Block */}

              {/* Testimonial List */}
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>

                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-gray-500 p-[30px] text-white'
                  data-jos_animation='fade-left'
                  data-jos_delay='0.1'
                >
                  <div className='block'>
                    <Image
                      src='/assets/images/th-1/rating.svg'
                      alt='rating'
                      width='146'
                      height='25'
                    />
                  </div>
                  <p>
                    “Cybokraft’s AI-OS transformed how we manage smart home and office
                    automation. The predictive intelligence is unbelievably accurate.”
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/images/final-1/pr1.webp'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Aarav Mehta
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        Smart Home Integrator
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}

                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-gray-500 p-[30px] text-white'
                  data-jos_animation='fade-left'
                  data-jos_delay='0.2'
                >
                  <div className='block'>
                    <Image
                      src='/assets/images/th-1/rating.svg'
                      alt='rating'
                      width='146'
                      height='25'
                    />
                  </div>
                  <p>
                    “Our response time dropped from minutes to seconds after integrating
                    Cybokraft’s Communication OS. Customers love the multilingual AI.”
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/images/final-1/pr2.webp'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Sarah Johnson
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        Customer Experience Director – U.K.
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}

                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-gray-500 p-[30px] text-white'
                  data-jos_animation='fade-left'
                  data-jos_delay='0.3'
                >
                  <div className='block'>
                    <Image
                      src='/assets/images/th-1/rating.svg'
                      alt='rating'
                      width='146'
                      height='25'
                    />
                  </div>
                  <p>
                    “Cybokraft’s nine-planet OS ecosystem unified our entire industrial
                    automation workflow into one intelligent dashboard.”
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/images/final-1/pr1.webp'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1 '>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Dr. Kenji Watanabe
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        Industrial Automation Specialist – Japan
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}

                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-gray-500 p-[30px] text-white'
                  data-jos_animation='fade-right'
                  data-jos_delay='0.1'
                >
                  <div className='block'>
                    <Image
                      src='/assets/images/th-1/rating.svg'
                      alt='rating'
                      width='146'
                      height='25'
                    />
                  </div>
                  <p>
                    “HealthOS is a medical breakthrough. Real-time vitals, medicine
                    tracking, and emergency alerts—Cybokrafts is the future of healthcare.”
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/images/final-1/pr2.webp'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Dr. Lisa Patel
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        Hospital Administrator – UAE
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}

                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-gray-500 p-[30px] text-white'
                  data-jos_animation='fade-right'
                  data-jos_delay='0.2'
                >
                  <div className='block'>
                    <Image
                      src='/assets/images/th-1/rating.svg'
                      alt='rating'
                      width='146'
                      height='25'
                    />
                  </div>
                  <p>
                    “Cybokraft’s API layer is incredibly developer-friendly. Integration
                    was fast, clean, and their team supported us throughout the process.”
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/images/final-1/pr2.webp'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        Michael Chen
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        Senior Software Engineer
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}

                {/* Testimonial Item */}
                <div
                  className='jos flex flex-col gap-y-8 rounded-[10px] border-[1px] border-gray-500 p-[30px] text-white'
                  data-jos_animation='fade-right'
                  data-jos_delay='0.3'
                >
                  <div className='block'>
                    <Image
                      src='/assets/images/th-1/rating.svg'
                      alt='rating'
                      width='146'
                      height='25'
                    />
                  </div>
                  <p>
                    “The ROI has been exceptional. Cybokrafts now powers every major
                    workflow in our enterprise—it’s truly the backbone of our growth.”
                  </p>
                  <div className='flex items-center gap-x-4'>
                    <div className='h-[60px] w-[60px] overflow-hidden rounded-full'>
                      <Image
                        src='/assets/images/final-1/pr1.webp'
                        alt='testimonial-img'
                        width='60'
                        height='60'
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <div className='flex flex-col gap-y-1'>
                      <span className='block text-lg font-semibold leading-[1.6]'>
                        David Rodriguez
                      </span>
                      <span className='block text-sm font-light leading-[1.4]'>
                        Enterprise Operations Manager
                      </span>
                    </div>
                  </div>
                </div>
                {/* Testimonial Item */}

              </div>
              {/* Testimonial List */}
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>

        {/*...::: Testimonial Section Start :::... */}

        {/* Body Background Shape 1 */}
        <div className='orange-gradient-1 absolute -left-[15px] top-[61%] -z-[1] h-[400px] w-[400px] -rotate-[-9.022deg] rounded-[400px]'></div>

        {/* Body Background Shape 2 */}
        <div className='orange-gradient-2 absolute -left-[100px] top-[64%] -z-[1] h-[360px] w-[360px] -rotate-[-9.022deg] rounded-[360px]'></div>
      </main >
    </>
  );
}

export default Home_1;
