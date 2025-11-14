import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Solution = () => {
  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="bg-gradient-to-br from-heroBg to-primary/10 dark:from-midnight_text dark:to-primary/5 rounded-3xl lg:px-16 px-4 py-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="md:text-42 sm:text-32 text-26 font-bold text-midnight_text dark:text-white leading-tight">
                Enterprise Platform for
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent block mt-2">
                  Rebates • Pricing • Agreements
                </span>
              </h2>
              <p className="mt-8 text-18 text-muted dark:text-white dark:text-opacity-80 lg:max-w-full sm:max-w-75% leading-relaxed">
                Trusted by industry leaders managing billions in commercial operations. Our unified 
                AI-powered platform delivers guaranteed 400% ROI by automating rebates, optimizing pricing, 
                and streamlining agreement management—all with enterprise-grade security and compliance.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Icon icon="solar:check-circle-bold" className="text-primary text-24" />
                  <span className="text-midnight_text dark:text-white font-medium">Unified Rebates, Pricing & Agreements Platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="solar:check-circle-bold" className="text-primary text-24" />
                  <span className="text-midnight_text dark:text-white font-medium">AI-Powered Automation & Predictive Insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="solar:check-circle-bold" className="text-primary text-24" />
                  <span className="text-midnight_text dark:text-white font-medium">SOC 2 Certified with Enterprise Security</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="lg:text-17 flex gap-4 w-fit items-center bg-primary text-white py-4 px-10 rounded-lg mt-12 border-2 border-primary hover:text-primary hover:bg-transparent font-semibold hover:shadow-xl transition-all duration-300"
              >
                Schedule Enterprise Demo
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="16"
                  height="16"
                />
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/solution/solution.png"
                alt="Enterprise Dashboard"
                width={531}
                height={200}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
