"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { PaymentImage } from "@/app/api/data";
import Image from "next/image";

const Payment = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const bottomAnimation = (index : any) => ({
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 + index * 0.4 },
  });

  const paymentItems = [
    "Rebate Automation",
    "Dynamic Pricing",
    "Agreement Lifecycle",
    "AI Analytics",
    "Real-Time Insights",
  ];

  return (
    <section className="dark:bg-darkmode py-14">
      <div
        ref={ref}
        className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4"
      >
        <motion.div {...TopAnimation}>
          <div className="px-4 lg:px-12">
            <h2 className="text-center font-bold md:text-42 sm:text-32 text-26 mb-8 text-midnight_text dark:text-white lg:mx-32 leading-tight">
              Simple, Powerful Platform for
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> Enterprise Rebates </span>
              and Pricing Management
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-10 mb-4">
            {paymentItems.map((item, index) => (
              <p
                key={index}
                className={`text-muted dark:text-white dark:text-opacity-80 md:text-19 text-base font-semibold relative hover:text-primary transition-colors ${
                  index !== paymentItems.length - 1
                    ? "after:content-[''] after:absolute after:w-0.5 after:h-3/4 after:bg-muted after:rounded-full after:-right-5 after:top-0.5"
                    : ""
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-start sm:mt-20 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-14 gap-8">
            {PaymentImage.map((item, index) => (
              <div key={index}>
                <motion.div {...bottomAnimation(index)}>
                  <div className="rounded-full">
                    <Image
                      src={item.image}
                      alt={`Feature: ${item.title}`}
                      width={100}
                      height={100}
                      className="rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 p-3 shadow-2xl dark:bg-midnight_text border-2 border-primary/30 hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="py-5">
                    <p className="lg:text-26 text-23 font-bold text-midnight_text dark:text-white">
                      {item.title}
                    </p>
                  </div>
                  <div className="mr-2">
                    <p className="text-17 text-muted dark:text-white dark:text-opacity-80 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
