"use client"
import Sidebar from "./components/sidebar";
import Profile from "./components/profile";
import Section2 from "./components/section2";
import { useEffect, useState } from "react";
import Work from './components/work'
import Link from "next/link";
import Loader from "./components/Loader";
export default function Home() {
  const [knowMore, setKnowMore] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 13000);
    };

    fakeDataFetch();
  }, []);
  return (

    isLoading ? (
      <Loader />
    ) : (
    <div className="container">
      
      <div className="w-full h-full top-0 text-white z-20">
        <Sidebar />
      </div>
      <section id='profile' className="flex flex-col items-center justify-center">
        <Profile />
      </section>
      <div className="md:w-full wave  md:relative md:inline-block md:top-[1rem] ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212121" fill-opacity="1" d="M0,128L26.7,117.3C53.3,107,107,85,160,117.3C213.3,149,267,235,320,256C373.3,277,427,235,480,224C533.3,213,587,235,640,202.7C693.3,171,747,85,800,74.7C853.3,64,907,128,960,181.3C1013.3,235,1067,277,1120,256C1173.3,235,1227,149,1280,133.3C1333.3,117,1387,171,1413,197.3L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>      </div>
      
      <section className="flex flex-col  w-full items-center justify-center bg-[#212121] md:relative ">
        <Section2/>
        <div className="w-full wave md:relative md:top-[-22rem] xl:block  h-[0rem] bg-[#00000]   md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212121" fill-opacity="1" d="M0,128L26.7,117.3C53.3,107,107,85,160,117.3C213.3,149,267,235,320,256C373.3,277,427,235,480,224C533.3,213,587,235,640,202.7C693.3,171,747,85,800,74.7C853.3,64,907,128,960,181.3C1013.3,235,1067,277,1120,256C1173.3,235,1227,149,1280,133.3C1333.3,117,1387,171,1413,197.3L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>      </div>
        
      </section>
        <section id='work'>
          <Work/>
        </section>
        <section className="flex flex-col items-center py-10 md:pb-16 z-10">
          <Link href='#profile' onClick={()=> setKnowMore(false)} className={`${knowMore ? 'cursor-pointer blog_button mt-10 md:mt-0' : 'hidden'}`}>Let{"'"}s get back</Link>
        </section>
    </div>
  ));
}

