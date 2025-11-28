'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAccordion from '@/components/hooks/useAccordion';
import useTabs from '@/components/hooks/useTabs';
import Home_1 from './home-1/page';

function Home() {


  return (
    <>



      {/* <Wrapper_01> */}
      <Home_1 />
      {/* </Wrapper_01> */}
    </>
  );
}

export default Home;
