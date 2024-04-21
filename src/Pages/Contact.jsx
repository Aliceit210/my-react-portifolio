import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className='bg-gradient-to-r from-black via-purple-500 to-white px-4 py-[15rem] font-bold text-slate-100'>
        <div className='-mt-[12rem] bg-gradient-to-r from-black via-black to-purple-300 shadow-gray-400 rounded-lg w-full sm:w-[70rem] border-lg h-[35rem] border-4 mx-auto flex flex-col sm:flex-row items-center gap-5'>
          <form action="https://formspree.io/f/maygzdrq" method="POST" className='border border-gray-400 w-full sm:w-[30rem] p-5 flex flex-col gap-4 rounded-md shadow-gray-400 m-5 px-4 lg:m-0'>
            <label htmlFor="name" className='text-center text-xl font-medium'>FullName</label>
            <input className='input' name="name" id="name" type="text" placeholder='Enter your name' required />
            <label htmlFor="email" className='text-center text-xl font-medium'>Your Email</label>
            <input className='input' name="Email" id="email" type="text" placeholder='Enter your email' required />
            <label htmlFor="phone" className='text-center text-xl font-medium'>PhoneNumber</label>
            <input className='input' name="phone" id="phone" type="text" placeholder='Enter your phone number' required />
            <label htmlFor="message" className='text-center text-xl font-medium'>message</label>
            <textarea className="input h-20" name="message" id="message" placeholder='Enter your message' required="30" rows="10"></textarea>
            <button className='button' type="submit">Submit</button>
          </form>
          <section className="bg-gray-900 text-white h-[55rem] lg:h-[35rem] w-full sm:w-auto object-fit rounded-lg p-6 sm:p-8">
            <h2 className="text-3xl -mt-1 mb-10 font-bold sm:text-4xl">My useful links</h2>
            <p className="text-gray-400 lg:mb-10 mb-10 ">
              As a frontend developer named Alice, I'd start by introducing myself and highlighting my expertise and experience in frontend development. Here's a potential introduction:
              "Hello everyone, I'm Alice, a frontend developer with a passion for creating engaging and intuitive user experiences on the web. With several years of experience in the field, I've had the opportunity to work on a variety of projects, ranging from small business websites to large-scale web applications. If you're looking for a frontend developer who is passionate, creative, and dedicated to delivering results, I'm here to help bring your vision to reality. Let's work together to build something amazing!"
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              <SocialLink icon={<FaGithub />} title="Github" link="https://github.com/Aliceit210" />
              <SocialLink icon={<FaLinkedin />} title="LinkedIn" link="https://www.linkedin.com/in/uwimana-alice-59904a270/" />
              <SocialLink icon={<FaTwitter />} title="Twitter" link="https://twitter.com/AliceUwima51070" />
              <SocialLink icon={<FaWhatsappSquare />} title="WhatsApp" link="#" />
              <SocialLink icon={<SiGmail />} title="Email" link="#" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

const SocialLink = ({ icon, title, link }) => {
  return (
    <a
      href={link}
      className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      <h2 className="mt-2 font-bold">{title}</h2>
    </a>
  );
}

export default Contact;
