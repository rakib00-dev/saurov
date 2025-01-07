import { FaPhoneAlt } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6';
import { FaYoutube } from 'react-icons/fa';
import Button from './Button';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="paddings innerWidth footer footer-center text-primary-content p-10 overflow-hidden"
    >
      {/* footer container */}
      <div className="flex flex-col justify-between items-start gap-10 w-full mb-5 md:flex-row">
        {/* content */}
        <div className="flex flex-col justify-start text-start gap-16 mb-5 w-full md:w-1/2 md:mb-0">
          <div className="grid gap-3 w-full">
            <h1 className="text-5xl font-extrabold w-full">Let’s talk!</h1>
            <p className="text-[1.1rem] font-bold">
              Ask us anything or just say hi 🖐
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 ">
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
        <form
          id="form"
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-10 w-full md:w-1/2"
        >
          <input type="hidden" name="access_key" value="" />
          <div className="flex flex-col gap-2 md:flex-row">
            <div
              id="name-container"
              className="flex flex-col items-start gap-2 text-md w-1/2 mr-3"
            >
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Md Hasan"
                className="border-b-2 text-md bg-transparent py-3 pr-8 pl-1 border-[#4b4b45cc] outline-none    "
                required
              />
            </div>
            <div
              id="email-container"
              className="flex flex-col items-start gap-2 text-md w-1/2"
            >
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gamil.com"
                className="border-b-2 text-md border-red bg-transparent py-3 pr-8 pl-1 border-[#4b4b45cc] outline-none   "
                required
              />
            </div>
          </div>
          <div
            id="message-container"
            className="flex flex-col items-start gap-2 text-md "
          >
            <label for="message">Message</label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Hi There!"
              className="border-b-2 text-md border-red bg-transparent border-[#4b4b45cc] outline-none w-4/5 md:py-2 md:pr-8 md:pl-1 md:w-full"
              required
              spellcheck="false"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-start transition-all hover:scale-110"
            >
              <Button type="submit" text={'Say Hello!'} border="full" />
            </button>
          </div>
        </form>
      </div>

      {/* social media container */}
      <div className="flex justify-start scale-90 bg-[#ffd2b6ed] rounded-full py-2 px-5 ">
        <div className="grid grid-flow-col justify-center items-center gap-4 *:cursor-pointer ">
          {/* *:invert */}
          <a
            href=""
            className="p-2 bg-[#dcb7a0ed] rounded-full hover:bg-[#ffd2b6ed] transition-all"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href=""
            className="p-2 bg-[#dcb7a0ed] rounded-full hover:bg-[#ffd2b6ed] transition-all"
          >
            <FaYoutube className="h-6 w-6" />
          </a>
          <a
            href="https://www.facebook.com/avoid.saurov/"
            className="p-2 bg-[#dcb7a0ed] rounded-full hover:bg-[#ffd2b6ed] transition-all "
          >
            <FaFacebookF className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/saurov.developer"
            className="p-2 bg-[#dcb7a0ed] rounded-full hover:bg-[#ffd2b6ed] transition-all "
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/avoid.saurov"
            className="p-2 bg-[#dcb7a0ed] rounded-full hover:bg-[#ffd2b6ed] transition-all "
          >
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
