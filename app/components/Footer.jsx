import React from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/Images/github-icon.svg"
import LinkedinIcon from "../../public/Images/linkedin-icon.svg";
import Leetcode from "../../public/Images/Leetcode.svg";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <span className="flex  " >
            <Link 
            href= {"/"} className='text-2xl md:text-5xl   text-white font-semibold '>
            <img src= "/Images/V-logo.png" className='h-[54px] ' />
        </Link>
        <p className="m-3 text-slate-600 "> Vishisht Maroria</p>
        </span>
        <div className="socials flex flex-row gap-5">
        <Link href="https://github.com/vishisht31"  target="_blank">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/vishisht-maroria-10144411b/" target="_blank">
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
        <Link href="https://leetcode.com/vishisht31/"  className="" target="_blank">
          <Image src={Leetcode} alt="Github Icon" />
        </Link>
      </div>

        <p className="text-slate-600 m-3">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;