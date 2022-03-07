import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaDev, FaMedium, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-200 py-1.5 flex justify-center flex-col">
            <div className="pt-5 pb-4 flex items-center justify-center">
                <a href="https://www.linkedin.com/in/iftakher-hossen/"><FaLinkedin className="mx-1 text-2xl text-slate-800" /></a>
                <a href="https://www.instagram.com/hossen_iftakher/"><FaInstagram className="mx-1 text-2xl text-slate-800" /></a>
                <a href="https://twitter.com/iftakher_hossen"><FaTwitter className="mx-1 text-[1.45em] text-slate-800" /></a>
                <a href="https://dev.to/iftakher_hossen"><FaDev className="mx-1 text-2xl text-slate-800" /></a>
                <a href="https://medium.com/@iftakherhossen"><FaMedium className="mx-1 text-2xl text-slate-800" /></a>
                <a href="mailto:iftakher.one@gmail.com"><FaEnvelope className="mx-1 text-2xl text-slate-800" /></a>
            </div>
            <p className="text-center font-medium">
                All rights reserved <span className="text-rose-500">Learn with Iftakher</span> ©2022 developed by
                <a href="https://iftakher-hossen.vercel.app/">Iftakher Hossen</a>.
            </p>
        </footer>
    );
};

export default Footer;