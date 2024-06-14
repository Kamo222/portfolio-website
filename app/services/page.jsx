"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { easeIn, motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Creating digital experiences that inspire, inform, and connect - one pixel at a time.",
    href: "",
  },
  {
    num: "02",
    title: "Digital Marketing",
    description:
      "Driving business success through innovative, data-driven, and customer-centric marketing strategies and solutions.",
    href: "",
  },
  {
    num: "03",
    title: "SEO",
    description:
      "Optimizing online visibility, driving traffic, and boosting rankings through strategic SEO solutions.",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX Design",
    description:
      "Crafting intuitive designs, simplifying complexity, and amplifying user delight every single day.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 py-2 px-4"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
