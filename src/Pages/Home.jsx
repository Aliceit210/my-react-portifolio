import React from 'react';
import myImage from '../assets/images/alice.jpeg';
import { TiHomeOutline } from "react-icons/ti";
import { RiInformationFill } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='bg-gradient-to-r from-black via-purple-500 to-white p-4 md:p-8 flex flex-col md:flex-row justify-center items-center text-slate-100'>
      <div className='md:w-1/2 p-6 rounded-lg bg-gradient-to-r from-black via-black to-purple-300 text-center md:text-left'>
        <img className='w-32 md:w-1/4 shadow-md mt-4 md:mt-0 mb-8 md:mr-8 md:ml-0 md:float-left' src={myImage} alt="Profile" />
        <div className='shadow-gray-400 overflow-hidden px-7 rounded-lg'>
          <p className='mt-4 md:mt-0 mb-4'>Hi! Welcome to my portfolio</p>
          <p className='text-2xl'>I am <span className='text-blue-500 text-2xl animate-bounce'>UWIMANA ALICE</span></p>
          <h2 className='mb-4'>FRONTEND DEVELOPER</h2>
          <h4 className='text-white text-1xl mb-8'>
            As a front-end developer named Alice, here's a brief description of myself in six lines:
            <br />
            <br />
            Hi, I'm Alice, a passionate front-end developer with a love for clean and intuitive user interfaces.
            With expertise in HTML, CSS, and JavaScript, I bring designs to life and create engaging web experiences.
            I enjoy crafting responsive layouts and optimizing websites for performance and accessibility.
            Constantly learning and staying up-to-date with the latest web technologies is a priority for me.
            Collaboration is key, and I thrive in a team environment, working closely with designers and back-end developers.
            My goal is to create visually appealing and user-friendly websites that leave a lasting impression.
          </h4>
        </div>
      </div>
      <div className="flex flex-row justify-center md:justify-start mt-8 md:mt-0 gap-8">
        <Link to="/">
          <div className='border w-10 h-10 rounded-full bg-gradient-to-r from-black via-purple-500 to-purple-300 shadow-md shadow-gray-400 px-2 py-2 text-blue-500 font-bold'>
            <TiHomeOutline />
          </div>
        </Link>
        <Link to="/about">
          <div className='border w-10 h-10 rounded-full bg-gradient-to-r from-black via-purple-500 to-purple-300 shadow-md shadow-gray-400 px-2 py-2 text-blue-500 font-bold'>
            <RiInformationFill />
          </div>
        </Link>
        <Link to="/skills">
          <div className='border w-10 h-10 rounded-full bg-gradient-to-r from-black via-purple-500 to-purple-300 shadow-md shadow-gray-400 px-2 py-2 text-blue-500 font-bold'>
            <GiSkills />
          </div>
        </Link>
        <Link to="/projects">
          <div className='border w-10 h-10 rounded-full bg-gradient-to-r from-black via-purple-500 to-purple-300 shadow-md shadow-gray-400 px-2 py-2 text-blue-500 font-bold'>
            <GrProjects />
          </div>
        </Link>
        <Link to="/contact">
          <div className='border w-10 h-10 rounded-full bg-gradient-to-r from-black via-purple-500 to-purple-300 shadow-md shadow-gray-400 px-2 py-2 text-blue-500 font-bold'>
            <MdContactPhone />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
