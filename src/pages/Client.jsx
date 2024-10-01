import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
function Client() {
  return (
    <>
      <Header />
      <div className="flex justify-evenly gap-[200px] bg-slate-900 md:flex-wrap p-[40px] text-white">
        <div className="c">
          <div className="h-[760px] w-[550px] bg-gray-300"></div>
          <h1 className="pt-[90px]  text-[60px] font-semibold">
            Client <br /> Testimonials:
          </h1>
        </div>
        <div className="flex flex-col gap-[30px]">
          <h1 className="text-[50px] leading-tight">
            Elevate Your Brand <br /> with Expert Digital <br /> Marketing:
          </h1>
          <p className="text-[20px]">
            Unlock your brand's potential through our <br /> comprehensive SEO
            strategies, driving organic <br /> traffic and boosting visibility. Engage
            your <br /> audience with targeted social media campaigns <br /> that build
            community and enhance your online <br /> presence. Maximize your
            advertising efforts with <br /> our data-driven approach, ensuring top-tier
            ROI <br /> and effective audience reach.
          </p>
          <button className="bg-blue-800  w-[200px] py-[7px]">
            See All Productes
          </button>
          <div className="h-[500px] w-[510px] bg-gray-300"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Client;
