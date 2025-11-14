"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Heroimage } from "@/app/api/data";

const HeroMockupArtifact = () => (
  <div className="relative bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-slate-200/60 w-full max-w-[620px] backdrop-blur-sm">
    {/* Browser Chrome - More realistic */}
    <div className="bg-white/95 backdrop-blur-md px-3 py-2.5 flex items-center gap-2 border-b border-slate-200/80">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
      </div>
      <div className="flex-1 bg-slate-100/80 rounded-md px-3 py-1 text-[10px] text-slate-500 ml-2 font-medium">
        🔒 app.pricentive.com/dashboard
      </div>
    </div>

    {/* Sidebar + Main Content Layout */}
    <div className="flex bg-white">
      {/* Compact Sidebar */}
      <div className="w-14 bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center py-4 gap-3 border-r border-slate-700">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-lg">
          P
        </div>
        <div className="w-full border-t border-slate-700 my-1"></div>
        {['📊', '💰', '📄', '⚙️'].map((icon, i) => (
          <div key={i} className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm cursor-pointer transition-all ${
            i === 0 ? 'bg-blue-500/20 text-blue-400' : 'text-slate-400 hover:text-white hover:bg-slate-700'
          }`}>
            {icon}
          </div>
        ))}
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/30">
        {/* Top Bar */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 px-5 py-3 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold text-slate-800">Dashboard Overview</h2>
            <p className="text-[10px] text-slate-500 mt-0.5">November 2024 • Live Data</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[9px] text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
              Last sync: <span className="text-green-600 font-medium">Live</span>
            </div>
            <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-[10px] font-semibold shadow-md">
              SJ
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-3 space-y-3">
          {/* KPI Cards - More sophisticated */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { 
                label: "Total Rebates",
                value: "$4.2M",
                change: "+12.5%",
                trend: "up",
                subtitle: "vs. last month",
                color: "from-blue-500 to-indigo-600"
              },
              { 
                label: "Active Agreements",
                value: "247",
                change: "+8.2%",
                trend: "up",
                subtitle: "12 pending review",
                color: "from-emerald-500 to-teal-600"
              },
              { 
                label: "AI Accuracy",
                value: "99.9%",
                change: "+0.1%",
                trend: "up",
                subtitle: "across all calculations",
                color: "from-violet-500 to-purple-600"
              },
            ].map((kpi, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200/60 p-2.5 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className="flex items-start justify-between mb-1.5">
                  <span className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide">{kpi.label}</span>
                  <div className={`text-[9px] font-bold ${kpi.trend === 'up' ? 'text-emerald-600' : 'text-red-600'} bg-${kpi.trend === 'up' ? 'emerald' : 'red'}-50 px-1.5 py-0.5 rounded`}>
                    {kpi.change}
                  </div>
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent mb-1`}>
                  {kpi.value}
                </div>
                <div className="text-[9px] text-slate-400">{kpi.subtitle}</div>
              </div>
            ))}
          </div>

          {/* Charts Section - More realistic */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Revenue Trend Chart - Fixed visibility */}
            <div className="bg-white rounded-xl border border-slate-200/60 p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-xs font-bold text-slate-800">Revenue Impact</h3>
                  <p className="text-[9px] text-slate-500 mt-0.5">AI-optimized performance</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[8px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+18.2%</span>
                </div>
              </div>
              
              {/* Simplified Bar Chart with HIGH visibility */}
              <div className="relative h-20">
                {/* Y-axis reference lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-px bg-slate-100"></div>
                  ))}
                </div>
                
                {/* Bars container */}
                <div className="relative h-full flex items-end justify-between gap-1 pt-2">
                  {[55, 68, 61, 82, 75, 91, 84, 98].map((height, i) => (
                    <div key={i} className="flex-1 group relative h-full flex items-end">
                      {/* Tooltip */}
                      <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[8px] px-1.5 py-0.5 rounded whitespace-nowrap z-10">
                        ${(height * 0.05).toFixed(1)}M
                      </div>
                      {/* Solid Bar - Maximum visibility */}
                      <div 
                        className="w-full bg-blue-500 hover:bg-blue-600 rounded-t transition-all duration-200 shadow-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between mt-1.5 px-0.5">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map((month, i) => (
                  <span key={i} className="text-[8px] text-slate-400">{month}</span>
                ))}
              </div>
            </div>

            {/* AI Insights Panel */}
            <div className="bg-gradient-to-br from-violet-50 to-purple-50/50 rounded-xl border border-violet-200/60 p-3 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-[10px]">✨</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800">AI Insights</h3>
                    <p className="text-[9px] text-slate-500 mt-0.5">Real-time</p>
                  </div>
                </div>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-1.5">
                {[
                  { 
                    icon: '🎯',
                    title: 'High-value opportunity',
                    desc: 'TechCorp renewal +15% uplift',
                    color: 'emerald'
                  },
                  { 
                    icon: '⚡',
                    title: 'AI optimized 3 agreements',
                    desc: 'Saved $124K margin',
                    color: 'blue'
                  },
                  { 
                    icon: '📊',
                    title: 'Pricing anomaly flagged',
                    desc: '12 SKUs below market',
                    color: 'amber'
                  },
                ].map((insight, i) => (
                  <div key={i} className="bg-white rounded-lg p-2 border border-slate-200/60 hover:shadow-sm transition-all cursor-pointer">
                    <div className="flex items-start gap-2">
                      <div className="text-sm">{insight.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[9px] font-semibold text-slate-800 leading-tight mb-0.5">
                          {insight.title}
                        </div>
                        <div className="text-[8px] text-slate-500 leading-tight">
                          {insight.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* AI Status Footer */}
              <div className="mt-2 pt-2 border-t border-violet-200/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 bg-violet-500 rounded-full animate-pulse"></div>
                  <span className="text-[8px] text-slate-600 font-medium">Analyzing 1.2M data points</span>
                </div>
                <span className="text-[8px] text-violet-600 font-semibold">99.9%</span>
              </div>
            </div>
          </div>

          {/* Data Table - Recent Transactions */}
          <div className="bg-white rounded-xl border border-slate-200/60 overflow-hidden shadow-sm">
            <div className="px-3 py-2 border-b border-slate-200/60 flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-800">Recent Transactions</h3>
              <button className="text-[9px] text-blue-600 font-medium hover:text-blue-700">View All →</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50/50">
                  <tr className="border-b border-slate-200/60">
                    <th className="text-left px-3 py-1.5 text-[9px] font-semibold text-slate-600 uppercase tracking-wider">Customer</th>
                    <th className="text-left px-3 py-1.5 text-[9px] font-semibold text-slate-600 uppercase tracking-wider">Amount</th>
                    <th className="text-left px-3 py-1.5 text-[9px] font-semibold text-slate-600 uppercase tracking-wider">Status</th>
                    <th className="text-right px-3 py-1.5 text-[9px] font-semibold text-slate-600 uppercase tracking-wider">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { customer: 'TechCorp Industries', amount: '$45,230', status: 'Processed', time: '2m ago', statusColor: 'emerald' },
                    { customer: 'Global Supplies Ltd', amount: '$32,100', status: 'Processing', time: '12m ago', statusColor: 'amber' },
                    { customer: 'Midwest Distributors', amount: '$28,450', status: 'Processed', time: '1h ago', statusColor: 'emerald' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <td className="px-3 py-2 text-[10px] font-medium text-slate-700">{row.customer}</td>
                      <td className="px-3 py-2 text-[10px] font-semibold text-slate-900">{row.amount}</td>
                      <td className="px-3 py-2">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium bg-${row.statusColor}-100 text-${row.statusColor}-700`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-right text-[9px] text-slate-500">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 1 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 1 },
  };
  return (
    <section className="relative pt-44 mb-14 bg-cover bg-center dark:bg-darkmode">
      <div className="w-full h-full absolute z-0 bg-heroBg rounded-b-[119px] -left-1/4 top-0 dark:bg-midnight_text"></div>
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) relative z-1 md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-12 items-center">
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <h1 className="md:text-50 sm:text-40 text-28 text-midnight_text dark:text-white lg:text-start mb-9 lg:w-full w-3/4 leading-tight font-bold">
              Master Your Commercial
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent md:text-56 text-40 font-extrabold">
                Revenue Engine
              </span>
              <br />
              <span className="md:text-44 text-32">Rebates • Pricing • Agreements</span>
            </h1>
            <p className="sm:text-20 text-17 text-muted dark:text-white dark:text-opacity-80 text-start lg:max-w-full sm:max-w-75% leading-relaxed">
              The only AI-powered platform that unifies rebates management, pricing intelligence, 
              and agreements automation. Maximize profitability, eliminate revenue leaks, and 
              streamline complex commercial operations in one enterprise solution.
            </p>
            <div className="flex items-center mt-12 gap-6 flex-wrap">
              <div>
                <Link
                  href="/contact"
                  className="text-17 flex gap-2 items-center bg-primary text-white py-4 px-10 rounded-lg border-2 border-primary hover:text-primary hover:bg-transparent hover:shadow-xl transition-all duration-300 font-semibold"
                >
                  See Platform in Action
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="16"
                    height="16"
                  />
                </Link>
              </div>
              <div>
                {/* <Link
                  href="/pricing"
                  className="text-17 flex gap-2 items-center text-muted dark:text-white dark:text-opacity-80 hover:text-primary font-semibold transition-all duration-300"
                >
                  View Pricing
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="16"
                    height="16"
                  />
                </Link> */}
              </div>
            </div>

            <div className="lg:my-28 my-12">
              <p className="text-20 text-muted dark:text-white dark:text-opacity-80 text-start mb-7 font-semibold">
                Trusted by Industry Leaders
              </p>
              <div className="flex space-x-8 justify-start w-full items-center">
                {/* {Heroimage.map((item, index) => (
                  <Link key={index} href="/" className="hover:scale-110 transition-transform duration-300">
                    <Image
                      src={item.lightimage}
                      alt="image"
                      width={115}
                      height={30}
                      className="block dark:hidden opacity-70 hover:opacity-100 transition-opacity"
                      style={{ width: "100%", height: "100%" }}
                    />
                    <Image
                      src={item.darkimage}
                      alt="image"
                      width={115}
                      height={30}
                      className="hidden dark:block opacity-70 hover:opacity-100 transition-opacity"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Link>
                ))} */}
              </div>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="lg:col-span-6 col-span-12 pl-20 lg:block hidden"
          >
            <HeroMockupArtifact />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
