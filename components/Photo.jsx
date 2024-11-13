"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.6, ease: "easeIn" }
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.6, ease: "easeInOut" },
          }}
          className="w-[298px] h-[298px] xl:w-[380px] xl:h-[380px] mix-blend-lighten absolute "
        >
          <Image
            src="/assets/portfolio-image2.jpg"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full mr-3 mt-1 xl:ml-1 xl:mt-3"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[400px] h-[300px] xl:h-[400px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="200"
            stroke="#FF3232"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
