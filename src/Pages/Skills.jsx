import React from 'react';
import { TfiHtml5 } from "react-icons/tfi";
import { FaFigma } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";

const Skills = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-20 lg:py-32 text-white bg-gradient-to-r from-black via-purple-500 to-black">
      <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
        <div className="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
          <h2 className="text-3xl  font-bold sm:text-4xl">Find your career path</h2>
          <p className="mt-4">
            "I've studied several programming languages, including HTML, JAVA, JAVASCRIPT, REACT JS, and more. I'm constantly expanding my skill set to stay ahead in the ever-evolving tech landscape. Whether it's front-end development with JavaScript frameworks like React or Vue, back-end work with languages like Express or Node.js, or database management with SQL and MySQL databases, I'm confident in my ability to tackle a wide range of projects."
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <SkillItem icon={<TfiHtml5 />} title="HTML" />
          <SkillItem icon={<FaFigma />} title="Figma" />
          <SkillItem icon={<DiCss3 />} title="CSS" />
          <SkillItem icon={<FaReact />} title="React JS" />
          <SkillItem icon={<DiJavascript1 />} title="JavaScript" />
          <SkillItem icon={<BiLogoTailwindCss />} title="Tailwind CSS" />
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ icon, title }) => {
  return (
    <div className="rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
      {icon}
      <h2 className="mt-2 font-bold">{title}</h2>
    </div>
  );
};

export default Skills;
