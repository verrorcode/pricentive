"use client";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const Architecture = () => {
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

  const staggerAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  return (
    <section ref={ref} className="architecture py-12 bg-gray-50 dark:bg-gray-900" id="architecture">
      <div className="container mx-auto px-4">
        <motion.div {...TopAnimation} className="section-header text-center mb-6">
          <h2 className="font-bold md:text-40 sm:text-32 text-26 text-midnight_text dark:text-white leading-tight">
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent ml-2">
              Enterprise-Grade
            </span>
            &nbsp;Architecture
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Secure, scalable, and seamlessly integrated with your existing systems
          </p>
        </motion.div>

        <div className="architecture-diagram max-w-4xl mx-auto">
          {/* Data Sources Layer */}
          <motion.div {...staggerAnimation} className="layer-label text-center mb-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Data Sources</h3>
          </motion.div>
          <motion.div {...leftAnimation} className="arch-layer grid md:grid-cols-3 gap-4 mb-6">
            <div className="arch-box bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="arch-icon text-2xl mb-2 text-center">🔄</div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 text-center">ERP Systems</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">SAP, Oracle, NetSuite</p>
            </div>
            <div className="arch-box bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="arch-icon text-2xl mb-2 text-center">📊</div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 text-center">CRM Data</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">Salesforce, Dynamics</p>
            </div>
            <div className="arch-box bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="arch-icon text-2xl mb-2 text-center">📁</div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 text-center">EDI/Files</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">CSV, XML, APIs</p>
            </div>
          </motion.div>

          {/* Integration Layer */}
          <motion.div {...staggerAnimation} className="layer-label text-center mb-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Integration Layer</h3>
          </motion.div>
          <motion.div {...rightAnimation} className="arch-layer grid md:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
            <div className="arch-box bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="arch-icon text-2xl mb-2 text-center">🔌</div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 text-center">Real-Time Sync</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">Bi-directional data flow</p>
            </div>
            <div className="arch-box bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="arch-icon text-2xl mb-2 text-center">🔐</div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 text-center">Secure APIs</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">REST & SOAP protocols</p>
            </div>
          </motion.div>

          {/* Core Platform Layer */}
          <motion.div {...staggerAnimation} className="layer-label text-center mb-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Core Platform</h3>
          </motion.div>
          <motion.div {...TopAnimation} className="arch-layer mb-6">
            <div className="arch-box primary bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg shadow-md text-white text-center max-w-xs mx-auto">
              <div className="arch-icon text-2xl mb-2">🚀</div>
              <h4 className="text-base font-semibold mb-1">Pricentive Engine</h4>
              <p className="text-xs text-white/90">AI-powered calculation & automation</p>
            </div>
          </motion.div>

          {/* Application Layer */}
          <motion.div {...staggerAnimation} className="layer-label text-center mb-3">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Application Layer</h3>
          </motion.div>
          <motion.div {...leftAnimation} className="arch-layer grid md:grid-cols-3 gap-4">
            <div className="arch-box bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="arch-icon text-2xl mb-2 text-center">📱</div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 text-center">Web Portal</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">User interface</p>
            </div>
            <div className="arch-box bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="arch-icon text-2xl mb-2 text-center">🤝</div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 text-center">Partner Portal</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">Collaboration hub</p>
            </div>
            <div className="arch-box bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <div className="arch-icon text-2xl mb-2 text-center">📈</div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 text-center">Analytics</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">BI & reporting</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;