import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";

const Header = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" fixed z-10 transition-transform duration-300 ease-in-out border border-t-0 border-websec rounded-md text-2xl flex flex-row justify-between items-center h-fit w-full md:w-fit mt-0 text-neutral-400  px-7 py-4 gap-8 shadow-md shadow-black">
        <a
          href="https://www.linkedin.com/in/abkashgangwar/ "
          rel="noreferrer"
          target="_blank"
        >
          {<FaLinkedin title="LinkedIN" className="hover:scale-110 " />}
        </a>
        <a
          href="https://github.com/abkashgangwar03"
          rel="noreffer"
          target="_blank"
        >
          {<FaGithub title="Github" className="hover:scale-110" />}
        </a>
        <a href="public/doc/Abkash Resume.pdf"
        download={true}  target="_blank"><HiDocumentDownload
          title="Resume download"
          className="hover:scale-110 cursor-pointer"
        /></a>
        
        <a href="https://wa.me/+916397335364" rel="noreffer" target="_blank">
          {<FaWhatsappSquare title="Whatsapp" className="hover:scale-110" />}
        </a>
        <a href="tel:+916397335364" rel="noreffer">
          {
            <FaPhone
              title="Call"
              className=" transition rotate-90 hover:scale-110 "
            />
          }
        </a>
      </div>
    </div>
  );
};

export default Header;
