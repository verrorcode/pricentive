"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import { BeneifitImage } from "@/app/api/data";

// Enhanced Pricentive Integration Ecosystem Diagram
const PricentiveIntegrationArtifact = () => (
  <div className="relative max-w-2xl mx-auto">
    {/* Integration Ecosystem Diagram */}
    <div className="bg-gradient-to-br from-white via-slate-50 to-blue-50/40 rounded-3xl p-8 shadow-2xl border border-blue-100/50 backdrop-blur-sm">
      
      {/* Title */}
      <div className="text-center mb-8">
        <motion.h3 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-xl font-bold text-slate-800 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Robust Integration Ecosystem
        </motion.h3>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm text-slate-600 font-medium"
        >
          Connect with 40+ Enterprise Systems
        </motion.div>
      </div>

      {/* Main Integration Diagram */}
      <div className="relative">
        
        {/* Central Pricentive Hub */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-32 h-32 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 rounded-3xl flex flex-col items-center justify-center text-white font-bold text-base shadow-2xl border-4 border-white cursor-pointer"
          >
            <Icon icon="solar:settings-bold-duotone" width="36" height="36" className="text-white mb-2" />
            <div className="text-sm">Pricentive</div>
            <div className="text-xs opacity-80">Core Engine</div>
          </motion.div>
          
          {/* Enhanced Pulse Ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0.2, 0.7] }}
            transition={{ delay: 1, duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl -z-10"
          />
          
          {/* Secondary pulse ring */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ delay: 1.2, duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-3xl -z-20"
          />
        </div>

        {/* Integration Categories in Enhanced Circular Layout */}
        <div className="relative h-[28rem] w-[28rem] mx-auto">
          
          {/* ERP Systems - Top Left */}
          <motion.div
            initial={{ x: -100, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.08, y: -5 }}
            className="absolute -top-6 -left-6 group cursor-pointer"
          >
            <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 w-36 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-white">
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-3"
                >
                  <Icon icon="logos:sap" width="40" height="40" className="mx-auto" />
                </motion.div>
                <div className="text-sm font-bold text-slate-800 mb-2">ERP Systems</div>
                <div className="flex gap-2 mb-3 justify-center">
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Icon icon="logos:oracle" width="30" height="30" />
                  </motion.div>
                  
                </div>
                <div className="text-xs text-slate-500 font-medium">SAP • Oracle •  Others</div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>

          {/* Data Analytics - Top Right */}
          <motion.div
            initial={{ x: 100, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.08, y: -5 }}
            className="absolute -top-6 -right-6 group cursor-pointer"
          >
            <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-500 w-36 group-hover:bg-gradient-to-br group-hover:from-purple-50 group-hover:to-white">
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-3"
                >
                  <Icon icon="logos:microsoft-power-bi" width="40" height="40" className="mx-auto" />
                </motion.div>
                <div className="text-sm font-bold text-slate-800 mb-2">Analytics</div>
                <div className="flex gap-2 mb-3 justify-center">
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Icon icon="logos:postgresql" width="18" height="18" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Icon icon="logos:mongodb" width="18" height="18" />
                  </motion.div>
                </div>
                <div className="text-xs text-slate-500 font-medium">PostgreSQL • MongoDB • MySQL</div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>

          {/* CRM Systems - Left */}
          <motion.div
            initial={{ x: -100,y:100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            whileHover={{ scale: 1.08, x: -5 }}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 group cursor-pointer"
          >
            <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-green-200 hover:border-green-400 hover:shadow-2xl transition-all duration-500 w-36 group-hover:bg-gradient-to-br group-hover:from-green-50 group-hover:to-white">
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-3"
                >
                  <Icon icon="logos:salesforce" width="40" height="40" className="mx-auto" />
                </motion.div>
                <div className="text-sm font-bold text-slate-800 mb-2">CRM Systems</div>
                <div className="flex gap-2 mb-3 justify-center">
                  
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Icon icon="logos:microsoft-dynamics-365" width="18" height="18" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Icon icon="logos:zoho" width="30" height="30" />
                  </motion.div>
                </div>
                <div className="text-xs text-slate-500 font-medium">Salesforce • Dynamics • Zoho</div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2.4, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>

          {/* Cloud Platforms - Right */}
          <motion.div
            initial={{ x: 100, y:100,opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            whileHover={{ scale: 1.08, x: 5 }}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 group cursor-pointer"
          >
            <div className="bg-white rounded-2xl p-4 shadow-lg border-2 border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 w-36 group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-white">
              <div className="text-center">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-3"
                >
                  <Icon icon="logos:aws" width="40" height="40" className="mx-auto" />
                </motion.div>
                <div className="text-sm font-bold text-slate-800 mb-2">Cloud</div>
                <div className="flex gap-2 mb-3 justify-center">
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Icon icon="logos:microsoft-azure" width="18" height="18" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Icon icon="logos:google-cloud" width="18" height="18" />
                  </motion.div>
                </div>
                <div className="text-xs text-slate-500 font-medium">AWS • Azure • Google Cloud</div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 2.6, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Enhanced Integration Stats */}
      
    </div>

    {/* Enhanced API Badge */}
    <motion.div
      initial={{ scale: 0, rotate: 15 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 3.0, duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: -5 }}
      className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl flex items-center gap-2 cursor-pointer"
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Icon icon="solar:code-bold" width="18" height="18" />
      </motion.div>
      REST API
    </motion.div>

    {/* Enhanced Live Status Badge */}
    <motion.div
      initial={{ scale: 0, x: -20 }}
      animate={{ scale: 1, x: 0 }}
      transition={{ delay: 3.2, duration: 0.5 }}
      whileHover={{ scale: 1.1, x: 5 }}
      className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white px-6 py-3 rounded-2xl text-sm font-bold shadow-2xl flex items-center gap-2 cursor-pointer"
    >
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-3 h-3 bg-white rounded-full"
      />
      Live Sync
    </motion.div>
  </div>
);

const Benefit = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  return (
    <section className="dark:bg-darkmode py-10 overflow-x-hidden">
      <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 mx-auto">
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-heroBg rounded-3xl md:py-12 py-8 2xl:pr-14 2xl:pl-20 sm:px-14 px-6"
        >
          <motion.div {...TopAnimation} className="items-start">
            <h2 className="font-bold md:text-40 sm:text-32 text-26 text-midnight_text dark:text-white leading-tight">
              One Platform for
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent ml-2">
                Rebates, Pricing & Agreements
              </span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-12 items-center md:gap-12 sm:gap-8">
            <motion.div
              {...leftAnimation}
              className="xl:col-span-6 col-span-12 sm:block hidden"
            >
              <div className="xl:px-0 lg:px-20">
                <PricentiveIntegrationArtifact />
              </div>
            </motion.div>
            <motion.div
              {...rightAnimation}
              className="xl:col-span-6 col-span-12"
            >
              {BeneifitImage.map((item, index) => (
                <div key={index} className="sm:flex items-start p-4 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="w-10 h-10 sm:mr-5 sm:mb-0 mb-3 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon={
                        item.alt.includes("Rebates") ? "solar:money-bag-bold" :
                        item.alt.includes("Pricing") ? "solar:chart-2-bold" :
                        item.alt.includes("Agreements") ? "solar:document-text-bold" :
                        item.alt.includes("Data") ? "solar:database-bold" :
                        "solar:settings-bold"
                      }
                      width="24"
                      height="24"
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h4 className="text-18 font-bold text-midnight_text dark:text-white mb-1">{item.alt}</h4>
                    <p className="text-16 text-midnight_text dark:text-white dark:text-opacity-80 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex items-center lg:justify-start justify-center">
                <Link
                  href="/contact"
                  className="text-17 flex gap-3 items-center bg-primary text-white py-4 px-10 rounded-lg mt-8 border-2 border-primary hover:text-primary hover:bg-transparent font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Schedule a Demo
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="16"
                    height="16"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefit;
