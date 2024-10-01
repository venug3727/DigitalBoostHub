import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
function Service() {
  return (
    <>
      <Header />
      <div className="p-[40px] flex justify-evenly bg-slate-900 text-white items-center">
        <div className="flex flex-col gap-[60px]">
          <h1 className="text-[50px]">Our Services:</h1>
          <p className="text-[15px]">
            Unlock your brand's potential with our expert SEO <br /> strategies,
            driving organic traffic and increasing <br /> visibility. Engage
            your audience with targeted <br /> social media campaigns designed
            to boost your <br />
            brand's presence and foster community. Optimize <br /> your digital
            advertising with our data-driven <br /> approach, ensuring maximum
            ROI and effective <br /> audience reach.
          </p>
          <button className="bg-blue-800  w-[200px] py-[7px]">See All Productes</button>
        </div>
        <div className="h-[610px]  w-[640px] bg-gray-200"></div>
      </div>
      <Footer />
    </>
  );
}

export default Service;
