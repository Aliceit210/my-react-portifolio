import React from 'react';
import myImage from '../assets/images/alice.jpeg';

const About = () => {
  return (
    <section className="bg-gradient-to-r from-black via-purple-500 to-black text-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto  <div className='md:w-1/2 p-6 rounded-lg bg-gradient-to-r from-black via-black to-purple-300 text-center md:text-left '">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-7">
          Welcome again to my about me page🖐🏼🖐🏼
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mr-[rem]">
          <img className="w-1/2 h-[29rem] rounded-lg shadow-lg" src={myImage} alt="Profile" />
          <div className="flex flex-col justify-center">
            <article className="space-y-9">
              <p>
                Hi there! My name is Uwimana Alice, and I'm a passionate frontend developer with a love for creating beautiful and user-friendly web interfaces. With several years of experience in the field, I'm dedicated to delivering high-quality code and exceptional user experiences.
              </p>
              <p>
                I graduated with a degree in Computer Science and have worked on a variety of projects, ranging from small business websites to large-scale web applications. I specialize in HTML, CSS, and JavaScript, and I'm proficient in popular frameworks like React and Bootstrap. I'm also experienced in working with version control systems such as Git.
              </p>
              <p>
                My work philosophy revolves around clean and maintainable code. I believe in writing code that is not only functional but also scalable and optimized for performance. I enjoy collaborating with designers and back-end developers to bring ideas to life, and I'm always eager to learn new technologies and best practices.
              </p>
              <p>
                In my portfolio, you'll find a collection of projects that I have completed. These projects showcase my ability to create responsive layouts, implement smooth animations, and integrate third-party APIs. Feel free to explore them and get a sense of my coding style and attention to detail.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
