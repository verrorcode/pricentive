"use client";
import React from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

// Rebate Dashboard Component
const RebateDashboard = () => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl h-full flex flex-col justify-center">
    <div className="space-y-3">
      {/* Progress bars showing rebate tiers */}
      <div className="space-y-2.5">
        {[
          { label: "Volume Tier 1", value: 85, amount: "$1.2M", color: "bg-blue-500", target: "90%" },
          { label: "Volume Tier 2", value: 92, amount: "$2.8M", color: "bg-blue-600", target: "95%" },
          { label: "Growth Bonus", value: 78, amount: "$890K", color: "bg-indigo-500", target: "80%" },
        ].map((tier, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-semibold text-slate-700">{tier.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-slate-500">Target: {tier.target}</span>
                <span className="text-[11px] font-bold text-slate-900">{tier.amount}</span>
              </div>
            </div>
            <div className="h-1.5 bg-white/60 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${tier.value}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className={`h-full ${tier.color} rounded-full relative`}
              >
                <div className="absolute right-0 top-0 h-full w-1 bg-white/30 rounded-full"></div>
              </motion.div>
            </div>
            <div className="text-[9px] text-slate-500 mt-0.5">{tier.value}% complete</div>
          </div>
        ))}
      </div>
      
      {/* Mini metrics row */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        {[
          { label: "Processed", value: "1,247", icon: "✓" },
          { label: "Queue", value: "23", icon: "⏳" },
          { label: "Accuracy", value: "99.9%", icon: "🎯" },
        ].map((metric, i) => (
          <div key={i} className="bg-white/70 rounded-lg p-2 text-center">
            <div className="text-lg mb-1">{metric.icon}</div>
            <div className="text-[10px] font-bold text-slate-900">{metric.value}</div>
            <div className="text-[8px] text-slate-500">{metric.label}</div>
          </div>
        ))}
      </div>
      
      {/* AI Status */}
      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 border border-blue-200/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-medium text-slate-700">AI Processing Live</span>
          </div>
          <div className="text-[10px] font-bold text-blue-600">Next: $45K rebate</div>
        </div>
      </div>
    </div>
  </div>
);

// Pricing Intelligence Component
const PricingIntelligence = () => (
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl h-full flex flex-col justify-center">
    <div className="space-y-3">
      {/* Price optimization cards */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { sku: "SKU-1247", current: "$245", optimized: "$289", impact: "+$44", trend: "up", confidence: "98%" },
          { sku: "SKU-3821", current: "$128", optimized: "$142", impact: "+$14", trend: "up", confidence: "95%" },
          { sku: "SKU-5093", current: "$567", optimized: "$521", impact: "-$46", trend: "down", confidence: "92%" },
          { sku: "SKU-7429", current: "$334", optimized: "$378", impact: "+$44", trend: "up", confidence: "97%" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-2 border border-purple-200/50 hover:shadow-md transition-all"
          >
            <div className="text-[9px] font-semibold text-slate-700 mb-1">{item.sku}</div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-slate-500 line-through">{item.current}</span>
                <Icon icon="solar:arrow-right-linear" className="text-purple-500" width="8" />
                <span className="text-[11px] font-bold text-purple-600">{item.optimized}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${item.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                {item.impact}
              </div>
              <span className="text-[8px] text-slate-500">{item.confidence} conf.</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Market Analysis */}
      <div className="bg-white/70 rounded-lg p-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-slate-700">Market Analysis</span>
          <span className="text-[8px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded">Live</span>
        </div>
        <div className="grid grid-cols-3 gap-1 text-center">
          <div>
            <div className="text-[11px] font-bold text-slate-900">847</div>
            <div className="text-[8px] text-slate-500">SKUs Analyzed</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-purple-600">+18%</div>
            <div className="text-[8px] text-slate-500">Avg Uplift</div>
          </div>
          <div>
            <div className="text-[11px] font-bold text-green-600">$2.4M</div>
            <div className="text-[8px] text-slate-500">Est. Impact</div>
          </div>
        </div>
      </div>
      
      {/* Total impact */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-2 text-white text-center">
        <div className="text-[9px] opacity-90 mb-0.5">Monthly Revenue Impact</div>
        <div className="text-base font-bold">+$124,500</div>
        <div className="text-[8px] opacity-75">AI optimized pricing</div>
      </div>
    </div>
  </div>
);

// Agreement Lifecycle Component
const AgreementLifecycle = () => (
  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl h-full flex flex-col justify-center">
    <div className="space-y-2.5">
      {/* Agreement stages */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { stage: "Draft", count: 12, icon: "📝", color: "bg-slate-400", description: "In progress" },
          { stage: "Review", count: 8, icon: "👁️", color: "bg-blue-500", description: "Legal review" },
          { stage: "Approval", count: 5, icon: "✓", color: "bg-amber-500", description: "Final sign-off" },
          { stage: "Active", count: 247, icon: "✨", color: "bg-green-500", description: "Live contracts" },
        ].map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-2 border border-green-200/50 hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="text-base">{stage.icon}</div>
              <div className="flex-1">
                <div className="text-[10px] font-semibold text-slate-700">{stage.stage}</div>
                <div className="text-[8px] text-slate-500">{stage.description}</div>
              </div>
              <div className={`${stage.color} text-white px-2 py-1 rounded text-[10px] font-bold group-hover:scale-110 transition-transform`}>
                {stage.count}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white/70 rounded-lg p-2">
        <div className="text-[10px] font-semibold text-slate-700 mb-2">Recent Activity</div>
        <div className="space-y-1">
          {[
            { action: "TechCorp agreement signed", time: "2m", status: "success" },
            { action: "GlobalTech renewal", time: "15m", status: "pending" },
            { action: "MegaCorp negotiation", time: "1h", status: "review" },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between text-[9px]">
              <div className="flex items-center gap-1">
                <div className={`w-1 h-1 rounded-full ${activity.status === 'success' ? 'bg-green-500' : activity.status === 'pending' ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
                <span className="text-slate-700">{activity.action}</span>
              </div>
              <span className="text-slate-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Compliance & Performance */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 border border-green-200/50 text-center">
          <Icon icon="solar:shield-check-bold" className="text-green-600 mx-auto mb-1" width="16" />
          <div className="text-[10px] font-bold text-slate-900">100%</div>
          <div className="text-[8px] text-slate-500">Compliant</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-2 border border-green-200/50 text-center">
          <Icon icon="solar:clock-circle-bold" className="text-blue-600 mx-auto mb-1" width="16" />
          <div className="text-[10px] font-bold text-slate-900">12 days</div>
          <div className="text-[8px] text-slate-500">Avg cycle</div>
        </div>
      </div>
    </div>
  </div>
);

// ROI Calculator Component
const ROICalculator = () => (
  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl h-full flex flex-col justify-center">
    <div className="space-y-3">
      {/* ROI Metrics */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Investment", value: "$50K", icon: "💼", subtext: "One-time setup" },
          { label: "Annual Return", value: "$200K", icon: "📈", subtext: "Recurring revenue" },
          { label: "ROI", value: "400%", icon: "🎯", subtext: "Industry leading" },
          { label: "Payback", value: "3 months", icon: "⚡", subtext: "Break-even point" },
        ].map((metric, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-2 border border-orange-200/50 text-center hover:shadow-md transition-all"
          >
            <div className="text-lg mb-1">{metric.icon}</div>
            <div className="text-[11px] font-bold text-slate-900 mb-0.5">{metric.value}</div>
            <div className="text-[8px] text-slate-500 mb-1">{metric.label}</div>
            <div className="text-[7px] text-slate-400">{metric.subtext}</div>
          </motion.div>
        ))}
      </div>
      
      {/* Cost Breakdown */}
      <div className="bg-white/70 rounded-lg p-2">
        <div className="text-[10px] font-semibold text-slate-700 mb-2">Cost Savings Breakdown</div>
        <div className="space-y-1">
          {[
            { category: "Manual processing", saving: "$85K", percentage: "65%" },
            { category: "Error reduction", saving: "$45K", percentage: "23%" },
            { category: "Audit compliance", saving: "$23K", percentage: "12%" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between text-[9px]">
              <span className="text-slate-700">{item.category}</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-900 font-semibold">{item.saving}</span>
                <span className="text-slate-500">({item.percentage})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Guarantee badge */}
      
    </div>
  </div>
);

const Method = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };
  
  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.6, delay },
  });

  return (
    <section className="dark:bg-darkmode overflow-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-heroBg rounded-3xl py-12 sm:px-12 px-5"
        >
          <motion.div {...TopAnimation} className="text-center mb-12">
            <h2 className="md:text-40 sm:text-32 text-26 text-midnight_text font-bold mb-4 dark:text-white leading-tight">
              Three Pillars of
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent ml-2">
                Commercial Success
              </span>
            </h2>
            <p className="font-medium xl:max-w-45% lg:max-w-50% md:max-w-75% text-17 mx-auto text-muted dark:text-white dark:text-opacity-80 leading-relaxed">
              AI-powered platform to eliminate complexity, maximize margins, and drive growth.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Rebates */}
            <motion.div
              {...fadeIn(0.2)}
              className="bg-white dark:bg-darkmode rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">REBATES</span>
                    </div>
                    <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-2">
                      AI-Powered Rebate Automation
                    </h3>
                    <p className="text-muted dark:text-white dark:text-opacity-80 text-sm leading-relaxed mb-4">
                      Process complex multi-tier rebates with 99.9% accuracy. Real-time accruals ensure you capture every dollar.
                    </p>
                  </div>
                </div>
                
                <RebateDashboard />
                
                <Link
                  href="/contact"
                  className="mt-4 text-sm flex gap-2 items-center hover:text-purple-600 text-primary font-semibold transition-colors group-hover:gap-3"
                >
                  Explore Rebates
                  <Icon icon="solar:alt-arrow-right-linear" width="16" height="16" />
                </Link>
              </div>
            </motion.div>

            {/* Pricing */}
            <motion.div
              {...fadeIn(0.3)}
              className="bg-white dark:bg-darkmode rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block px-3 py-1.5 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3">
                      <span className="text-purple-600 dark:text-purple-400 font-bold text-xs">PRICING</span>
                    </div>
                    <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-2">
                      Dynamic Pricing Intelligence
                    </h3>
                    <p className="text-muted dark:text-white dark:text-opacity-80 text-sm leading-relaxed mb-4">
                      AI analyzes market conditions and margins to recommend optimal pricing that maximizes profitability.
                    </p>
                  </div>
                </div>
                
                <PricingIntelligence />
                
                <Link
                  href="/contact"
                  className="mt-4 text-sm flex gap-2 items-center hover:text-purple-600 text-primary font-semibold transition-colors group-hover:gap-3"
                >
                  Learn More
                  <Icon icon="solar:alt-arrow-right-linear" width="16" height="16" />
                </Link>
              </div>
            </motion.div>

            {/* Agreements */}
            <motion.div
              {...fadeIn(0.4)}
              className="bg-white dark:bg-darkmode rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full mb-3">
                      <span className="text-green-600 dark:text-green-400 font-bold text-xs">AGREEMENTS</span>
                    </div>
                    <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-2">
                      Complete Agreement Lifecycle
                    </h3>
                    <p className="text-muted dark:text-white dark:text-opacity-80 text-sm leading-relaxed mb-4">
                      Automated workflows guide creation, negotiation, and approval with complete version control and audit trails.
                    </p>
                  </div>
                </div>
                
                <AgreementLifecycle />
                
                <Link
                  href="/contact"
                  className="mt-4 text-sm flex gap-2 items-center hover:text-purple-600 text-primary font-semibold transition-colors group-hover:gap-3"
                >
                  Discover More
                  <Icon icon="solar:alt-arrow-right-linear" width="16" height="16" />
                </Link>
              </div>
            </motion.div>

            {/* ROI */}
            <motion.div
              {...fadeIn(0.5)}
              className="bg-white dark:bg-darkmode rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="inline-block px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 rounded-full mb-3">
                      <span className="text-orange-600 dark:text-orange-400 font-bold text-xs">ROI GUARANTEE</span>
                    </div>
                    <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-2">
                      400% Guaranteed ROI
                    </h3>
                    <p className="text-muted dark:text-white dark:text-opacity-80 text-sm leading-relaxed mb-4">
                      AI identifies hidden profit opportunities and optimizes agreement structures to maximize returns.
                    </p>
                  </div>
                </div>
                
                <ROICalculator />
                
                <Link
                  href="/contact"
                  className="mt-4 text-sm flex gap-2 items-center hover:text-purple-600 text-primary font-semibold transition-colors group-hover:gap-3"
                >
                  See ROI Calculator
                  <Icon icon="solar:alt-arrow-right-linear" width="16" height="16" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
