import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="p-[40px] flex justify-between text-white  bg-slate-900">
        <div className="flex flex-col gap-[40px]">
          <h1 className="text-[25px]">DigitalBoostHub</h1>
          <p className="text-[20px text-slate-400]">
            Enjoy the touring <br />
            with Salty
          </p>
          <div className="text-[30px] flex gap-[20px]">
            <FaFacebook className="hover:scale-90 cursor-pointer"  />
            <FaSquareInstagram className="hover:scale-90 cursor-pointer"  />
            <FaXTwitter className="hover:scale-90 cursor-pointer"  />
          </div>
        </div>

        <div className="">
            <h1 className="text-xl">Resources</h1>
            <ul className="mt-[25px] flex flex-col gap-[20px]">
                <li className="hover:scale-110 hover:cursor-pointer">Download</li>
                <li className="hover:scale-110 hover:cursor-pointer">Help Center</li>
                <li className="hover:scale-110 hover:cursor-pointer">Guide Book</li>
                <li className="hover:scale-110 hover:cursor-pointer">App Directory</li>
            </ul>

        </div>
        
        <div className="">
            <h1 className="text-xl">Travellers</h1>
            <ul className="mt-[25px] flex flex-col gap-[20px]">
                <li className="hover:scale-110 hover:cursor-pointer">Why Travellers</li>
                <li className="hover:scale-110 hover:cursor-pointer">Enterprice</li>
                <li className="hover:scale-110 hover:cursor-pointer">Customer Stories</li>
                <li className="hover:scale-110 hover:cursor-pointer">Instagram post</li>
            </ul>

        </div>
        <div className="">
            <h1 className="text-xl">Company</h1>
            <ul className="mt-[25px] flex flex-col gap-[20px]">
                <li className="hover:scale-110 hover:cursor-pointer">Travelling</li>
                <li className="hover:scale-110 hover:cursor-pointer">About Locato</li>
                <li className="hover:scale-110 hover:cursor-pointer">Success</li>
                <li className="hover:scale-110 hover:cursor-pointer">Information</li>
            </ul>

        </div>
        <div className="">
            <h1 className="text-xl">Get App</h1>
            <ul className="mt-[25px] flex flex-col gap-[20px]">
                <li className="hover:scale-105 hover:cursor-pointer flex items-center gap-4"> <FaGooglePlay className="text-[25px] cursor-pointer hover:scale-110" />Google Play Store</li>
                <li className="hover:scale-105 hover:cursor-pointer flex items-center gap-4"> <FaAppStoreIos  className="text-[25px] cursor-pointer hover:scale-110" />App Store</li>
                
            </ul>

        </div>
        
      </div>
      <div className="py-[20px] text-center text-white bg-slate-900">
        <p className="text-[20px]">&copy; 2024 DigitalBoostHub. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
