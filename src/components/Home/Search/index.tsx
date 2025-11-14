"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { review } from "@/app/api/data";

const Search = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email address");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: "Demo request from homepage",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Thank you! We'll contact you soon to schedule your demo.");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon
          key={`full-${i}`}
          icon="ph:star-fill"
          className="w-5 h-5 text-yellow-500"
        />
      );
    }

    if (halfStars) {
      stars.push(
        <Icon
          key="half"
          icon="ph:star-half-fill"
          className="w-5 h-5 text-yellow-500"
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Icon
          key={`empty-${i}`}
          icon="ph:star-bold"
          className="w-5 h-5 text-yellow-500"
        />
      );
    }

    return stars;
  };

  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-heroBg rounded-3xl p-2"
        >
          <motion.div
            {...TopAnimation}
            className="text-center lg:px-20 px-4 pt-20"
          >
            <div className="flex justify-center">
              <Image
                src="/images/search/free.png"
                alt="Quick Setup"
                width={67}
                height={38}
              />
            </div>
            <h2 className="text-midnight_text font-bold dark:text-white md:text-40 sm:text-32 text-26 leading-tight">
              Transform Your Commercial Operations
              <span className="block lg:text-40 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent text-28 mt-2">
                Rebates • Pricing • Agreements
              </span>
            </h2>
            <div className="md:max-w-75% mx-auto mt-8">
              {/* Desktop Form */}
              <form onSubmit={handleSubmit} className="hidden md:block">
                <div className="flex lg:items-center md:items-start bg-white dark:bg-darkHeroBg shadow-xl rounded-2xl overflow-hidden">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email address"
                    className="grow px-4 py-5 pl-6 text-midnight_text dark:text-white text-17 focus:outline-hidden bg-white dark:bg-darkHeroBg placeholder:text-muted/50"
                    disabled={isLoading}
                  />
                  <div className="flex lg:items-center lg:justify-start justify-center mr-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="text-17 flex items-center bg-primary text-white py-4 px-10 rounded-lg my-2 border-2 border-primary hover:text-primary hover:bg-transparent font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Icon icon="eos-icons:loading" className="mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Get Demo"
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* Mobile Form */}
              <div className="md:hidden">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email address"
                    className="w-full px-4 py-4 bg-white dark:bg-darkHeroBg text-midnight_text dark:text-white text-17 rounded-lg shadow-xl focus:outline-hidden placeholder:text-muted/50"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full text-17 flex items-center justify-center bg-primary text-white py-4 px-10 rounded-lg border-2 border-primary hover:text-primary hover:bg-transparent font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Icon icon="eos-icons:loading" className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get Demo"
                    )}
                  </button>
                </form>
              </div>

              {message && (
                <div className={`mt-4 text-center text-sm ${message.includes("Thank you") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                  {message}
                </div>
              )}
              <div className="flex items-center justify-center my-7">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center">
                  <Icon
                    icon="solar:check-circle-bold"
                    width="20"
                    height="20"
                    className="text-white"
                  />
                </div>
                {/* <p className="ml-4 text-17 text-muted dark:text-white dark:text-opacity-80 font-medium">
                  No credit card required • Complete platform access • 400% Guaranteed ROI
                </p> */}
              </div>
            </div>
          </motion.div>
          {/* <motion.div {...bottomAnimation}>
            {review.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl lg:py-16 sm:py-10 py-5 my-2 lg:px-24 sm:px-12 px-6 dark:bg-darkmode shadow-xl"
              >
                <div className="grid lg:grid-cols-2 lg:gap-0 gap-7">
                  <div>
                    <div className="mb-10">
                      <Image
                        src="/images/search/double.png"
                        alt="Quote"
                        width={52}
                        height={39}
                      />
                    </div>
                    <p className="text-midnight_text dark:text-white text-18 mb-9 leading-relaxed font-medium">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex sm:items-center sm:gap-2 sm:flex-row flex-col">
                        <h3 className="font-bold text-17 text-midnight_text dark:text-white">
                          {item.name}
                        </h3>
                        <Icon
                          icon="bytesize:minus"
                          className="sm:block hidden"
                        />
                        <h5 className="text-muted dark:text-muted text-16">
                          {item.post}
                        </h5>
                      </div>
                    </div>
                  </div> */}
                  {/* <div className="flex sm:items-center items-start lg:justify-evenly sm:flex-row flex-col lg:gap-0 gap-10">
                    <div>
                      <div className="sm:mb-8 mb-5">
                        <div className="flex gap-2 mb-3">
                          {renderStars(parseFloat(item.appstorerating))}
                        </div>
                        <p className="text-muted text-16">
                          <span className="text-midnight_text dark:text-white font-bold text-18">
                            {item.appstorerating}
                          </span>
                          /5 — From 2500+ reviews
                        </p>
                      </div>
                      <div>
                        <Link href="https://www.g2.com" target="_blank" rel="noopener noreferrer">
                          <Image
                            src="/images/search/app.png"
                            alt="App Store"
                            width={130}
                            height={44}
                            className="hover:scale-105 transition-transform"
                          />
                        </Link>
                      </div>
                    </div> */}
                    {/* <div>
                      <div className="sm:mb-8 mb-5">
                        <div className="flex gap-2 mb-3">
                          {renderStars(parseFloat(item.gplayrating))}
                        </div>
                        <p className="text-muted text-16">
                          <span className="text-midnight_text dark:text-white font-bold text-18">
                            {item.gplayrating}
                          </span>
                          /5 — From 3000+ reviews
                        </p>
                      </div>
                      <div>
                        <Link href="/">
                          <Image
                            src="/images/search/google.png"
                            alt="G2 Reviews"
                            width={130}
                            height={44}
                            className="hover:scale-105 transition-transform"
                          />
                        </Link>
                      </div> */}
                    {/* </div> */}
                  {/* </div>
                </div>
              </div>
            ))}
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Search;
