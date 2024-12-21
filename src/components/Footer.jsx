import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="paddings innerWidth footer footer-center bg-[#ecb29b] text-primary-content p-10 "
    >
      <aside className="">
        <div
          style={{ background: 'var(--logo-gradient)' }}
          className="fill-white p-1 rounded-xl "
        >
          <img
            loading="lazy"
            src="./assets/images/navbar/logo1.png"
            alt="logo"
            width={40}
            className="filter invert saturate-200 brightness-[110%] contrast-[101%]"
          />
        </div>
        <p className="font-bold">
          Cutting-Edge Creations
          <br />
          Maintaining Client Satisfaction Since 2017
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="bg-[#ffd2b6ed] rounded-full py-2 px-5 ">
        <div className="grid grid-flow-col gap-4 *:cursor-pointer ">
          {/* *:invert */}
          <a className="p-2 bg-[#dcb7a0ed] rounded-full hover:bg-[#ffd2b6ed] transition-all">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a className="p-2 bg-[#dcb7a0ed] rounded-full hover:bg-[#ffd2b6ed] transition-all">
            <FaYoutube className="h-6 w-6" />
          </a>
          <a className="p-2 bg-[#dcb7a0ed] rounded-full hover:bg-[#ffd2b6ed] transition-all ">
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a className="p-2 bg-[#dcb7a0ed] rounded-full hover:bg-[#ffd2b6ed] transition-all ">
            <FaLinkedinIn className="h-6 w-6" />
          </a>
          <a className="p-2 bg-[#dcb7a0ed] rounded-full hover:bg-[#ffd2b6ed] transition-all ">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
