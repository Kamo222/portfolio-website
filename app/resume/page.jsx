"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Feel free to get in touch  with me. :)",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kamohelo Mamaregane",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+27)61 464 8565",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "South African",
    },
    {
      fieldName: "Email",
      fieldValue: "kamohelomamaregane1@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "Experience the experience.",
  items: [
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "2023 - Present",
    }
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "Learned from the web, building for the web.",
  items: [
    {
      institution: "University of the People",
      certification: "AS. Computer Science",
      year: "2024 - Present",
    },
    {
      institution: "Academy of Sound Engineering",
      certification: "Higher Certificate, Audio Technology",
      year: "2019",
    },
  ],
};

const certifications = {
  icon: "",
  title: "My Certifications",
  description:
    "Continuous learning is the name of the game.",
  items: [
    {
      institution: "Zaio Coding School",
      certification: "Full Stack Java Developer Bootcamp",
      year: "2023",
    },
    {
      institution: "Google",
      certification: "Fundamentals of Digital Marketing",
      year: "2024",
    },
    {
      institution: "Naspers Labs",
      certification: "Soft-skills and Entrepreneurship",
      year: "2023",
    }
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Transforming ideas into reality, one bug at a time.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJs",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <SiNodedotjs />,
      name: "NodeJs",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[60vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[65vh} w-full">
            <TabsContent value="experience" className=" w-full">
              <div className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[25rem]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col ustify--center item-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px text-center lg:text-left]">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[60px] h-[6px] rouned-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className=" w-full h-full">
              <div className="flex flex-col gap-4 text-left xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[25rem]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329]  py-6 px-10 rounded-xl flex flex-col justify-center item-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.year}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center xl:text-left">
                            {item.certification}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[60px] h-[6px] rouned-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="certifications" className=" w-full h-full">
              <div className="flex flex-col gap-4 text-left xl:text-left">
                <h3 className="text-4xl font-bold">{certifications.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certifications.description}
                </p>

                <ScrollArea className="h-[25rem]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certifications.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col ustify--center item-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.year}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center xl:text-left">
                            {item.certification}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[60px] h-[6px] rouned-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className=" w-full h-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[25rem]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[7rem] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className=" w-full text-center xl:text-left">
              <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-col-1 xl:grid-cols-1 gap-y-3 max-w-[620px] mx-auto xl:mx-0 xl:h-auto">
                  {
                    about.info.map((item, index) => {
                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60 ">{item.fieldName}</span>
                          <span className="text-white text-xl">{item.fieldValue}</span>
                        </li>
                    })
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
