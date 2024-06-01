"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const service = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly interfaces using HTML, CSS, and JavaScript along with frameworks like React and Vue.js.",
    href: "/frontend-development",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Creating robust and scalable server-side applications with Node.js, Python, and .NET, ensuring seamless data flow and integration.",
    href: "/backend-development",
  },
  {
    num: "03",
    title: "Data Science",
    description:
      "Utilizing statistical methods and machine learning algorithms to extract insights and knowledge from data for informed decision-making.",
    href: "/data-science",
  },
  {
    num: "04",
    title: "Artificial Intelligence",
    description:
      "Developing intelligent systems and applications using machine learning, neural networks, and natural language processing.",
    href: "/artificial-intelligence",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl::py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {service.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justfit-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {item.num}
                  </div>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  ) : (
                    <BsArrowDownRight />
                  )}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
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
