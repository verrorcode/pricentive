"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { perks } from "@/app/api/data";

// AI Rebate Configuration Laptop Mockup
const AIRebateLaptopMockup = () => (
  <div className="relative max-w-4xl mx-auto">
    {/* Laptop Frame */}
    <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-xl p-3 shadow-2xl">
      <div className="bg-black rounded-t-lg overflow-hidden">
        {/* Laptop Screen */}
        <div className="bg-white h-[400px] relative">
          {/* Browser Chrome */}
          <div className="flex items-center px-4 py-2 bg-gray-100 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 mx-6">
              <div className="bg-white rounded px-3 py-1 text-xs text-slate-600 border">
                🔒 pricentive.com/complex-schemes
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-bold">Complex Rebate AI</h3>
                <div className="bg-white/25 rounded-full px-3 py-1 text-xs flex items-center gap-2">
                  <Icon icon="solar:magic-stick-3-bold" width="14" />
                  <span>Processing</span>
                </div>
              </div>
              <div className="text-sm opacity-95">Any Complexity → Instant Results</div>
            </div>
          </div>

          <div className="flex h-[320px]">
            {/* Left Panel - Complex Input */}
            <div className="w-1/2 p-4 border-r border-gray-200 bg-gray-50">
              <div className="h-full space-y-3">
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Icon icon="solar:brain-bold" width="16" className="text-purple-600" />
                  Describe ANY Complex Scheme
                </h4>
                
                {/* Complex Example Input */}
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="text-xs text-blue-700 font-semibold mb-2">Multi-Dimensional Example:</div>
                  <div className="text-xs text-slate-800 leading-relaxed">
                    "Tiered volume rebates (2%-8%) + seasonal multipliers + growth bonuses + 
                    product category weights + regional adjustments + loyalty premiums + 
                    early payment discounts + minimum commitment thresholds"
                  </div>
                </div>

                {/* AI Complexity Analysis */}
                <div className="bg-emerald-50 rounded-lg p-3 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="text-xs font-bold text-green-800">Complexity Analysis</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white rounded p-2">
                      <div className="font-semibold text-slate-800">8 Variables</div>
                      <div className="text-slate-500">Identified</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-semibold text-slate-800">47 Rules</div>
                      <div className="text-slate-500">Generated</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-semibold text-slate-800">2.1s</div>
                      <div className="text-slate-500">Processing</div>
                    </div>
                    <div className="bg-white rounded p-2">
                      <div className="font-semibold text-slate-800">100%</div>
                      <div className="text-slate-500">Accurate</div>
                    </div>
                  </div>
                </div>

                {/* Key Capabilities */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-700">AI Handles:</div>
                  {[
                    "Multi-tier volume scales",
                    "Conditional logic chains", 
                    "Time-based variations",
                    "Performance incentives"
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-2 text-xs"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-slate-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Instant Results */}
            <div className="w-1/2 p-4 bg-white">
              <div className="h-full space-y-3">
                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Icon icon="solar:lightning-bold" width="16" className="text-yellow-600" />
                  Instant Complex Structure
                </h4>

                {/* Generated Scheme Preview */}
                <div className="bg-slate-50 rounded-lg p-3 border">
                  <div className="text-xs font-semibold text-slate-700 mb-2">Auto-Generated Scheme:</div>
                  <div className="space-y-2">
                    {[
                      { type: "Base Tiers", rules: "4 volume levels", complexity: "Standard" },
                      { type: "Seasonality", rules: "Q4 +25% multiplier", complexity: "Advanced" },
                      { type: "Growth Bonus", rules: "10%+ = +1.5%", complexity: "Complex" },
                      { type: "Category Mix", rules: "Premium +0.5%", complexity: "Expert" },
                    ].map((rule, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="bg-white rounded p-2 border text-xs flex items-center justify-between"
                      >
                        <div>
                          <div className="font-semibold text-slate-800">{rule.type}</div>
                          <div className="text-slate-500">{rule.rules}</div>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-semibold ${
                          rule.complexity === 'Standard' ? 'bg-blue-100 text-blue-700' :
                          rule.complexity === 'Advanced' ? 'bg-green-100 text-green-700' :
                          rule.complexity === 'Complex' ? 'bg-orange-100 text-orange-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {rule.complexity}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Value Proposition Metrics */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { metric: "Setup Time", value: "2 mins", icon: "⚡", vs: "vs 2 weeks" },
                    { metric: "Accuracy", value: "99.9%", icon: "🎯", vs: "vs 85%" },
                    { metric: "Complexity", value: "Unlimited", icon: "🧠", vs: "vs Basic only" },
                    { metric: "Maintenance", value: "Auto", icon: "🔄", vs: "vs Manual" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-2 border border-blue-200 text-center"
                    >
                      <div className="text-base mb-1">{item.icon}</div>
                      <div className="text-xs font-bold text-slate-800">{item.value}</div>
                      <div className="text-xs text-slate-500">{item.metric}</div>
                      <div className="text-xs text-purple-600 font-medium">{item.vs}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-3 text-center text-white">
                  <div className="text-sm font-bold mb-1">From Complex to Simple</div>
                  <div className="text-xs opacity-90">AI transforms any rebate complexity into automated precision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Laptop Base */}
    <div className="h-6 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 rounded-b-xl shadow-xl"></div>
    
    {/* Floating Value Props */}
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2"
    >
      <Icon icon="solar:infinity-bold" width="16" />
      <span>Unlimited Complexity</span>
    </motion.div>
    
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.1, duration: 0.3 }}
      className="absolute -bottom-3 -left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl flex items-center gap-2"
    >
      <Icon icon="solar:lightning-bold" width="16" />
      <span>Instant Results</span>
    </motion.div>
  </div>
);

const Mobile = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

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
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div ref={ref} className="grid md:grid-cols-12 items-center lg:gap-12 gap-6">
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <h2 className="lg:text-40 text-28 text-midnight_text font-bold dark:text-white leading-tight">
              Complete Visibility Into
              <br />
              <span className="lg:text-40 text-28 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent font-extrabold">
                Rebates, Pricing & Agreements
              </span>
            </h2>
            <p className="mt-8 text-muted dark:text-white dark:text-opacity-80 lg:text-18 lg:max-w-full max-w-75% leading-relaxed">
              Access your entire commercial ecosystem from anywhere. Monitor rebate accruals, 
              approve pricing changes, review agreements, and get AI-powered alerts on any device—
              ensuring you never miss critical insights or opportunities.
            </p>
            <div className="flex flex-col gap-7 mt-16">
              {perks.map((item, index) => (
                <div key={index} className="flex items-start gap-5 p-4 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon
                      icon="solar:check-circle-bold"
                      width="20"
                      height="20"
                      className="text-white"
                    />
                  </div>
                  <p className="text-17 text-muted dark:text-white dark:text-opacity-80 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-start">
              <Link
                href="/contact"
                className="lg:text-17 flex gap-4 items-center bg-primary text-white py-4 px-10 rounded-lg mt-12 border-2 border-primary hover:text-primary hover:bg-transparent font-semibold hover:shadow-xl transition-all duration-300"
              >
                Request Platform Access
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="16"
                  height="16"
                />
              </Link>
            </div>
          </motion.div>
          <motion.div {...rightAnimation} className="lg:col-span-6 col-span-12">
            <div className="lg:max-w-full max-w-75% mx-auto">
              <AIRebateLaptopMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mobile;
