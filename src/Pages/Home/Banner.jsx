import React from "react";
import { motion } from "motion/react";
import BannerImg1 from "../../assets/img/img (1).jpg";
import BannerImg2 from "../../assets/img/img (2).jpg";

const Banner = () => {
  return (
    <div>
      <section className="bg-white w-full">
        <div className="grid grid-cols-1 justify-between items-center gap-5 px-4 py-6 sm:px-0 sm:py-6 md:grid-cols-2 lg:px-0 lg:py-6">
          <div className="">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ transition: { duration: 4 }, scale: 1 }}
              className="text-4xl font-bold text-gray-900 sm:text-5xl"
            >
              Understand user flow and{" "}
              <motion.span
                animate={{
                  color: ["#33ff74", "#f333ff", "#3393ff", "#051b34"],
                  transition: { duration: 4, repeat: Infinity },
                }}
              >
                increase
              </motion.span>{" "}
              conversions
            </motion.h1>

            <motion.p
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 4 } }}
              className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </motion.p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="grid justify-center">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="rounded-t-4xl rounded-br-4xl border-blue-600 border-s-8 border-b-8 w-96"
              src={BannerImg1}
              alt=""
            />
            <motion.img
              animate={{ x: [50, 100, 50] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="rounded-t-4xl rounded-br-4xl border-blue-600 border-s-8 border-b-8 w-96"
              src={BannerImg2}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
