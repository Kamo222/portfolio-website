"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+27)61 464 8565",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kamohelomamaregane1@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "78 Barlinka Street, Pomona, Kempton Park, 1619",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-4 p-5 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Feel free to get in touch with me.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-3">
                <Input type="firstname" placeholder="Firstname" className="text-sm"/>
                <Input type="lastname" placeholder="Lastname" className="text-sm"/>
                <Input type="email" placeholder="Email Address"className="text-sm"/>
                <Input type="phonenumber" placeholder="Phone Number"className="text-sm"/>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="mst">Digital Marketing</SelectItem>
                    <SelectItem value="sdf">SEO</SelectItem>
                    <SelectItem value="fds">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[5.5rem]" placeholder="Leave a message." />
              <Button className="">Send message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index) => {
                  return <li key={index} className="flex items-center gap-3">
                    <div className="flex gap-6 items-center justify-center">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">{item.icon}</div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
