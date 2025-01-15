import React from 'react';
import s from '../component/s.png';
import rec from '../component/rec.png';
import po from '../component/po.png';
import ops from '../component/ops.png';
import ok from '../component/ok.png';
import the from '../component/the.png';
import icon from '../component/icon.png';
import bars from '../component/bars.png';


const ProjectCard = ({ imageSrc, title, description, techStack, livePreviewLink, codeLink }) => (
  <div className="max-w-[373px] h-[580px] rounded-xl shadow-lg border border-gray-300 overflow-hidden bg-[rgba(54,54,54,1)] lg:h-[550px] ">
    <div className="w-full h-[300px] bg-gray-200 overflow-hidden rounded-t-lg">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="mt-4 px-4"> 
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="mt-4 text-gray text-xl">{description}</p>
      <p className="text-gray pt-2">
        <span className="text-lg text-gray">Tech stack:</span> {techStack}
      </p>
      <div className="flex justify-between items-center">
        <a
          href={livePreviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 pt-4 cursor-pointer"
        >
          <img src={bars} alt="Live Preview Icon" className="w-5 h-5 filter invert" />
          <p className="text-sm font-medium underline text-white">Live Preview</p>
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-4 pt-4 cursor-pointer"
        >
          <img src={icon} alt="View Code Icon" className="w-6 h-6 filter invert" />
          <p className="text-sm font-medium underline text-white hover:text-gray-300 transition duration-300">
            View Code
          </p>
        </a>
      </div>
    </div>
  </div>
);

const Card = () => {
  return (
    <div className="flex flex-wrap justify-between items-center p-4 w-full bg-static-200 text-gray-400 lg:ml-[25px]  pt-11">
      <div className="" id="Projects">
        <h1 className="font-poppins font-bold text-4xl text-gray h-8 sm:ml-[20%] text-5xl lg:ml-[42%]">Projects</h1>
        <p className="pt-6 text-gray-500 sm:ml-[37%] text-3xl">Things I’ve built so far</p>

        <div className="flex gap-6 pt-[75px] flex-wrap justify-between items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
          <ProjectCard
            imageSrc={s}
            title="Project 1"
            description="This is a sample project description with some content."
            techStack="HTML, JavaScript, SASS, React"
            livePreviewLink="https://example.com"
            codeLink="https://github.com"
          />
          <ProjectCard
            imageSrc={rec}
            title="Project 2"
            description="This is a sample project description with some content."
            techStack="HTML, JavaScript, SASS, React"
            livePreviewLink="https://example.com"
            codeLink="https://github.com"
          />
          <ProjectCard
            imageSrc={po}
            title="Project 3"
            description="This is a sample project description with some content."
            techStack="HTML, JavaScript, SASS, React"
            livePreviewLink="https://example.com"
            codeLink="https://github.com"
          />
          <ProjectCard
            imageSrc={ops}
            title="Project 4"
            description="This is a sample project description with some content."
            techStack="HTML, JavaScript, SASS, React"
            livePreviewLink="https://example.com"
            codeLink="https://github.com"
          />
          <ProjectCard
            imageSrc={ok}
            title="Project 5"
            description="This is a sample project description with some content."
            techStack="HTML, JavaScript, SASS, React"
            livePreviewLink="https://example.com"
            codeLink="https://github.com"
          />
          <ProjectCard
            imageSrc={the}
            title="Project 6"
            description="This is a sample project description with some content."
            techStack="HTML, JavaScript, SASS, React"
            livePreviewLink="https://example.com"
            codeLink="https://github.com"
          />
          
        </div>
      </div>

    </div>
  );
};

export default Card;
