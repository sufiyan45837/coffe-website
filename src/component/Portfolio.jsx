import React from 'react';
import html from '../component/html.svg';
import a from '../component/a.svg';
import b from '../component/b.svg';
import c from '../component/c.svg';
import d from '../component/d.svg';
import e from '../component/e.svg';
import f from '../component/f.svg';
import h from '../component/h.svg';
import i from '../component/i.svg';
import j from '../component/j.svg';
import k from '../component/k.svg';
import git from '../component/git (1).png';
import python from '../component/python.png';


const Portfolio = () => {
  return (
    <div className="px-4 sm:px-10 py-8  text-white">
      {/* Tech Stack Section */}
      <main>
  <nav className="text-center sm:text-left lg:ml-[40%]" id="TechStack">
    {/* Title */}
    <div className="text-gray-400 text-4xl sm:text-5xl font-bold mt-10">
      <h1>Tech Stack</h1>
    </div>

    {/* Subtitle */}
    <p className="pt-4 text-lg sm:text-2xl font-normal text-gray-300 lg:transform lg:translate-x-[-100px]">
      Technologies I’ve been working with recently
    </p>
  </nav>

  {/* Icon Grid */}
  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-8 pt-10">
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={html} alt="HTML" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://heroku.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={a} alt="React" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={b} alt="Another Technology" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://www.javascript.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={c} alt="JavaScript" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://nodejs.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={d} alt="Node.js" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://www.python.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={e} alt="Python" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://www.css.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={f} alt="CSS" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://git-scm.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={git} alt="Git" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://www.javascript.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={h} alt="Heroku" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://www.tailwindcss.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={i} alt="TailwindCSS" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://aka.ms/vscode-activatecopilotfree"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={j} alt="VS Code Copilot" className="w-full h-full object-contain" />
    </a>

    <a
      href="https://www.github.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
    >
      <img src={k} alt="GitHub" className="w-full h-full object-contain" />
    </a>
  </div>
</main>

    </div>
  );
};

export default Portfolio;
