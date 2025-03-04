import React from "react";
import Animation from "../components/Animation";

const Footer = () => {
  return (
    <footer className=" text-gray-300 h-fit ">
      <Animation />
      <p className=" text-center">
        &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
