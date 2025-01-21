import React, { useState, useEffect } from 'react';
import '../index.css';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  function getDate() {
    const today = new Date();
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];
    const month = months[today.getMonth()];
    const date = today.getDate();
    return [date, month];
  }

  return (
    <div className="relative w-full h-[80vh] mb-[20vh] flex items-center justify-center">
      <div className="flex flex-row justify-between  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  text-white">
       <div></div>
        {/* Top Right Section */}
        <div>
          <div className="font-jack text-[70px] leading-[30px] md:lg:text-[100px] md:lg:leading-[50px]">
            *{currentDate[0]} <span className="text-[40px] md:lg:text-[70px]">{currentDate[1]}</span>
          </div>
          <div className="font-jack text-[16px] md:lg:text-[30px] ml-5 md:lg:ml-9 text-yellow">
            available for work
          </div>
          <div className="flex flex-col font-sora text-[15px] md:lg:text-[20px] md:lg:ml-10 mx-5">
            I am a developer and UX/UI designer based in Melbourne. I have many years of experience in consulting in all areas of digital. I love minimal and brutalist design. I love music and art.
          </div>
        </div>

        {/* Bottom Left Section */}
        <div className="flex flex-col md:lg:px-10 px-5">
          <div className="font-jack text-primaryFont text-[30px] leading-[30px] md:lg:text-[50px] md:lg:leading-[50px] mb-2 md:lg:mb-5">
            creative
          </div>
          <div className="font-tuskerBold text-yellow text-[100px] leading-[100px] md:text-[100px] md:leading-[100px] lg:text-[150px] lg:leading-[120px]">
            DESIGNER<span className="font-jack text-[50px] text-primaryFont">&</span>
          </div>
          <div className="text-primaryFont font-tuskerBold text-[100px] leading-[50px] md:text-[100px] md:leading-[50px] lg:text-[150px] lg:leading-[100px]">
            DEVELOPER
          </div>
        </div>

        {/* Bottom Right Section */}
        <div className="flex bottom-1 md:lg:bottom-10 right-0 justify-end mr-5 absolute">
          <button className="md:lg:px-7 md:lg:pt-2 md:lg:pb-3 pt-1 pb-2 px-4 font-abril text-md md:lg:text-2xl text-primaryFont border-2 border-primaryFont rounded-full">
            contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
