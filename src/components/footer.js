import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="w-[100vw] py-[2vw] px-[3vw] flex flex-col bg-gray-950"
    >
      <div className=" flex md:flex-row flex-col md:gap-0 gap-6">
        <div className="md:w-[60%] w-full ">
          <img src="imgs/logo.png" alt="site-logo" className="h-6 md:h-8 mb-8 md:mb-12" />
          <div>
            <div className="text-white pb-3 text-lg md:text-2xl font-bold">Join our team</div>
            <div className="flex gap-4">
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="w-[160px] md:w-[240px] min-h-[40px] bg-gray-800 text-white py-4 px-4"
              />
              <button className="w-[80px] md:w-[100px] min-h-[40px] bg-blue-700 text-white py-4 font-bold hover:bg-gray-700 hover: hover:text-blue-700">
                JOIN
              </button>
            </div>
          </div>
        </div>
        
        <div className="md:w-[20%] w-full flex flex-col">
          <h3 className="text-white font-bold text-lg pb-4 md:pb-6">Information</h3>
          <Link
            to="/"
            className="text-gray-400 text-sm pb-3 hover:text-blue-700"
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 text-sm pb-3 hover:text-blue-700"
          >
            Contact Us
          </Link>
        </div>

        <div className="md:w-[25%] w-full">
          <h3 className="text-white font-bold text-2xl md:text-3xl pb-6">Contact Us</h3>
          <div className="text-gray-400 text-sm pb-3">
            Phone: (+91) 7507284555
          </div>
          <div className="text-gray-400 text-sm pb-3">
            Email: <mail to="info@peryton.in">info@peryton.in</mail>
          </div>

          <div className="flex gap-4 text-gray-400 mt-8">
            <div className="md:w-[4vw] md:h-[4vw] w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaFacebook />
            </div>
            <div className="md:w-[4vw] md:h-[4vw] w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaTwitter />
            </div>
            <div className="md:w-[4vw] md:h-[4vw] w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaLinkedin />
            </div>
            <div className="md:w-[4vw] md:h-[4vw] w-[40px] h-[40px] bg-gray-800 flex items-center justify-center rounded-full hover:bg-blue-700 hover:text-white">
              <FaInstagram />
            </div>
          </div>
        </div>

      </div>

      
      <div className="w-full flex md:flex-row md:gap-0 gap-16 flex-col justify-between mt-12 border-t border-gray-800 pt-6">
        <div className="text-gray-400 md:order-1 order-2">
          © {new Date().getFullYear()} Made with ❤ by Peryton
        </div>
        <div className="flex md:gap-6 gap-2 md:order-2 order-1 md:flex-row flex-col">
          <Link className="text-gray-400 hover:text-blue-700">
            Terms & Conditions
          </Link>
          <Link className="text-gray-400 hover:text-blue-700">
            Privacy Policy
          </Link>
          <Link className="text-gray-400 hover:text-blue-700">
            Refund & Return Policy
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
