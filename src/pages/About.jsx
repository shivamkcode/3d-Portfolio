import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { skills, experiences, certifications } from "../constants";
import CTA from "../components/CTA";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");
    const horizontalScroll = document.getElementById("horizontal-scroll");

    gsap.to(horizontalScroll, {
      x: () => -(horizontalScroll.scrollWidth - scrollContainer.offsetWidth),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top top",
        end: () =>
          `+=${horizontalScroll.scrollWidth - scrollContainer.offsetWidth}`,
        scrub: 0.5,
        pin: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

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

    gsap.from(".skill", {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm {""}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Shivam
        </span>
      </h1>
      <div className="mt-4 flex flex-col gap-3 text-slate-500 head-p">
        <p>
          Web Developer based in Canada, specialized in building responsive
          full-stack web application.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Skills</h3>
        <div id="skills" className="mt-16 flex flex-wrap gap-12 justify-center">
          {skills.map((skill) => {
            const [showDescription, setShowDescription] = useState(false);
            return (
              <div
                key={skill.name}
                className="block-container w-20 h-20 cursor-pointer skill"
                title={skill.name}
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
                onMouseDown={() => setShowDescription(true)}
                onMouseUp={() => setShowDescription(false)}
              >
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h1/2 object-contain"
                  />
                </div>
                {showDescription && (
                  <div
                    className={`absolute -top-16 left-1/2 -translate-x-1/2 bg-black text-white py-2 px-3 rounded-md z-50 opacity-50`}
                  >
                    {skill.name} ({skill.type})
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Certifications</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Here are some of the certifications I've earned to enhance my skills
            and knowledge:
          </p>
        </div>
        <div
          id="scroll-container"
          style={{
            mask: "linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
          }}
          className="relative w-full overflow-hidden"
        >
          <div
            id="horizontal-scroll"
            className="relative pt-12 flex gap-8 justify-start top-1/2 -translate-y-1/2"
            style={{ width: certifications.length * 600 + "px" }}
          >
            {certifications.map((certification) => (
              <Link
                to={certification.link}
                key={certification.name}
                className="w-[600px] cursor-pointer transition transform hover:scale-[101%] duration-300"
              >
                <div className="rounded-xl flex flex-col justify-center items-center p-4 bg-white border border-gray-200 hover:shadow-xl h-[80vh]">
                  <img
                    src={certification.imageUrl}
                    alt={certification.name}
                    className="w-full h-full object-contain mb-4"
                  />
                  <div className="text-center">
                    <h4 className="text-black text-lg font-poppins font-semibold">
                      {certification.name}
                    </h4>
                    <p className="text-black-500/50 font-normal text-sm">
                      {certification.institution}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            A versatile professional with experience in customer service at Tim
            Hortons, freelance full stack web development, contributing to
            projects at 100 Devs Agency, and providing efficient service in a
            grocery store setting. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
