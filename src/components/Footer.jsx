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
      className="paddings innerWidth footer footer-center text-primary-content p-10 "
    >
      {/* footer container */}

      {/* social media container */}
      <div className="bg-[#ffd2b6ed] rounded-full py-2 px-5 ">
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
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
