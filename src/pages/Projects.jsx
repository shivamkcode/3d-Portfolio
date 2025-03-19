import React, { useRef } from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Project = ({ project, index }) => {
  const projectRef = useRef(null)

  useGSAP(() => {
    const element = projectRef.current;

    gsap.from(element, {
      x: index % 2 === 1 ? 200 : -200, 
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%", 
        end: "top 50%",
        scrub: false,
        toggleActions: "play none none reverse"
      },
    });
  });

  return (
    <div ref={projectRef} className="lg:w-[400px] w-full">
      <div className="block-container w-12 h-12">
        <div className={`btn-back rounded-xl ${project.theme}`} />
        <div className="btn-front rounded-xl flex justify-center items-center">
          <img
            src={project.iconUrl}
            alt="Project Icon"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col ">
        <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
        <p className="mt-2 text-slate-500">{project.description}</p>
        <div className="mt-5 flex items-center gap-2 font-poppins">
          <Link
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600"
          >
            View On Github
          </Link>
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
          {project.deploy && (
            <>
              <Link
                to={project.deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 ml-20"
              >
                View Live
              </Link>
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  useGSAP(() => {
    gsap.from(".head-text", {
      y: -20,
      opacity: 0,
      delay: 0.5,
      ease: "power1.inOut",
    });

    gsap.from(".head-p", {
      opacity: 0,
      delay: 0.8,
      ease: "power1.inOut",
    });
  });
  
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-4 flex flex-col gap-3 text-slate-500 head-p">
        <p>
          I've embarked on numerous projects throughout my journey as a
          web-developer, but these are the ones I hold closest to my heart. Many
          of them are open-source, so if you come across something that piques
          your interest, feel free to explore the codebase and contribute your
          ideas for further echancements. Your collaboration is highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16 overflow-x-hidden py-4">
        {projects
          .sort(() => Math.random() - 0.5)
          .map((project, index) => (
            <Project project={project} index={index} key={index} />
          ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
