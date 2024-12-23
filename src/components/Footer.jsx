import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
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
      <div className="p-4 flex justify-between gap-10 w-full">
        {/* content */}
        <div className="flex flex-col justify-start text-start gap-16">
          <div className="grid gap-3">
            <h1 className="text-5xl font-extrabold">Let’s talk!</h1>
            <p className="text-[1.1rem] font-bold">
              Ask us anything or just say hi 🖐
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <a
              href="maillto:saurov.inovate@gmail.com"
              className="flex justify-center items-center gap-2 text-[1.1rem]"
            >
              <IoMail /> saurov.inovate@gmail.com
            </a>
            <a
              href="tel:+1 (647) 865-1195"
              className="flex justify-center items-center gap-2 text-[1.1rem]"
            >
              <FaPhoneAlt /> +1 (647) 865-1195
            </a>
          </div>
        </div>

        {/* form */}
        <form id="form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="" />
          <div id="name-email-container">
            <div id="name-container">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div id="email-container">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
          </div>
          <div id="message-container">
            <label for="message">Message</label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Enter Your Message"
              required
              spellcheck="false"
            ></textarea>
          </div>
          <button type="submit" class="btn submit">
            Submit
          </button>
        </form>
      </div>

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
