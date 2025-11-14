"use client";
import React, { FC, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Icon } from "@iconify/react";

const Spend: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const [isModalOpen, setIsVideoOpen] = useState<boolean>(false);

  const openModal = (): void => {
    setIsVideoOpen(true);
  };

  const closeModal = (): void => {
    setIsVideoOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);
  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div ref={ref}>
          <motion.div {...TopAnimation} className="text-center">
            <h2 className="md:text-40 sm:text-32 text-26 text-midnight_text font-bold mb-5 dark:text-white leading-tight">
              Maximize Profitability Across
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent ml-2">
                All Revenue Channels
              </span>
            </h2>
            <p className="text-18 text-muted dark:text-white dark:text-opacity-80 font-medium mx-1 lg:mx-64 mb-3 leading-relaxed">
              See how our intelligent platform helps enterprises optimize rebates, pricing, and agreements 
              to prevent margin erosion, capture hidden revenue, and drive measurable ROI.
            </p>
          </motion.div>
          <motion.div {...bottomAnimation} className="flex justify-center items-center">
            <div className="relative overflow-hidden mt-14 rounded-2xl shadow-2xl">
              <Image
                src="/images/spend/spends.png"
                alt="Platform Demo Video"
                width={550}
                height={350}
                className="rounded-2xl w-full"
              />
              {/* <button
                className="text-midnight_text absolute z-1 top-40% md:left-1/2 left-45% rounded-full hover:text-primary hover:scale-110 transition-all duration-300 py-4 px-3 bg-white shadow-xl"
                onClick={openModal}
              >
                <Icon icon="solar:play-bold" width="28" height="20" />
              </button>
              {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-center justify-center">
                  <div className="bg-white dark:bg-darkmode rounded-2xl sm:m-0 m-4 shadow-2xl">
                    <div className="overlay flex items-center justify-between border-b border-solid border-border dark:border-dark_border p-6 dark:border-darkborder">
                      <h3 className="text-midnight_text dark:text-white font-bold text-20">
                        Platform Demo: AI-Powered Rebates Management
                      </h3>
                      <button
                        onClick={closeModal}
                        className="bg-[url('/images/icon/closed.svg')] bg-no-repeat bg-contain w-6 h-6 inline-block dark:invert hover:scale-110 transition-transform"
                      ></button>
                    </div>
                    <iframe
                      height="400"
                      className="p-4 md:w-50 w-full"
                      src="https://www.youtube.com/embed/zzBxZeOTuDw?si=o8O6J_Z9OjdCbtcq"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )} */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Spend;
