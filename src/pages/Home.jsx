import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
function Home() {
  return (
    <>
      <Header />
      <div className=" flex justify-between bg-slate-900 md:flex-wrap p-[40px] text-white ">
        <div className="c">
          <h1 className="text-[70px] font-semibold leading-tight">
            Transforming <br />
            brands <br />
            through <br />
            <span className="text-blue-800">
              digital <br /> innovation
            </span>
            .
          </h1>

          <div className="flex gap-[70px]  mt-[50px]">
            <button className="text-blue-400 border font-semibold text-lg border-blue-400 hover:text-white px-5 py-1  ">
              Let's talk
            </button>
            <button className="border px-5 py-1 text-lg font-semibold hover:bg-white hover:text-black">
              See All Projects
            </button>
          </div>
        </div>
        <div className="bg-slate-200 flex  h-[600px] w-[532px] mr-[90px]">
          
        </div>
      </div>

      <div className="flex p-[40px] bg-slate-900 text-gray-500 text-[30px] font-semibold ">
        <ul className="uppercase flex gap-[100px]">
          <li>spotify</li>
          <li>santander</li>
          <li>oracle</li>
          <li>tencent</li>
          <li>allianz</li>
        </ul>
      </div>

      <div className="flex p-[40px]  bg-blue-800 justify-between ">
        <div className="text-center bg-blue-800  text-white">
          <h1 className="text-[70px]">20K+</h1>
            <p className=" mt-[-20px] pb-[30px]">In some Countries, We Work As A <br />Global Team.</p>
        
        </div>
        <div className="text-center  text-white">
          <h1 className="text-[70px]">98%</h1>
            <p className=" mt-[-20px] pb-[30px]"> We Have Worked With 88% Of The <br /> Global 500 Companies</p>
        
        </div>
        <div className="text-center bg-blue-800  text-white">
          <h1 className="text-[70px]">85%</h1>
            <p className=" mt-[-20px] pb-[30px]"> We Started With A Ebillious Mindset And <br /> Set Ourselves The Challenge</p>
        
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
