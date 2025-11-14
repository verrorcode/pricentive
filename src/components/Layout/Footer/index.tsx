"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { footerLinks } from "@/app/api/data";
import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          message: "Newsletter subscription from footer",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Thank you for subscribing! We'll keep you updated.");
        setEmail("");
        setSubmissionStatus({ type: 'success', message: 'Successfully subscribed!' });
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
        setSubmissionStatus({ type: 'error', message: data.error || "Subscription failed. Please try again." });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="pt-8 mt-14 bg-midnight_text relative after:content-[''] after:absolute after:bg-[url('/images/footer/bgline.png')] after:bg-no-repeat after:w-52 after:h-24 after:right-0 after:top-28 xl:after:block after:hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-2">
        <div className="flex lg:items-center justify-between lg:flex-row flex-col border-b border-dark_border pb-14 mb-16 ">
          <div className="flex sm:flex-nowrap flex-wrap gap-6">
            <div className="flex items-center text-foottext text-16">
              {/* <Icon icon="weui:location-outlined" className="w-7 h-7 mr-3" /> */}
              <div className="flex flex-col">
                {/* <span>Enterprise Tower, Suite 2500</span> */}
                {/* <span>Ghansoli, Navi Mumbai</span> */}
              </div>
            </div>
            <div className="flex items-center gap-2 text-foottext">
              {/* <Icon icon="majesticons:phone-retro-line" className="w-7 h-7" /> */}
              <Link href="#" className="text-16 hover:text-primary transition-colors">
                {/* <span> +1 (800) 555-REBATE</span> */}
              </Link>
            </div>
            <div className="flex items-center text-foottext gap-2">
              {/* <Icon icon="clarity:email-line" className="w-7 h-7" /> */}
              <Link
                href="#"
                className="inline-flex items-center text-16 hover:text-primary transition-colors"
              >
                {/* <span>enterprise@rebatesplatform.com</span> */}
              </Link>
            </div>
          </div>
          <div className="flex gap-4 mt-4 lg:mt-0">
            <Link href="#" className="text-muted hover:text-primary transition-colors">
              <Icon icon="fe:facebook" width="32" height="32" />
            </Link>
            <Link href="#" className="text-muted hover:text-primary transition-colors">
              <Icon icon="fa6-brands:square-twitter" width="32" height="32" />
            </Link>
            <Link href="#" className="text-muted hover:text-primary transition-colors">
              <Icon icon="fa6-brands:linkedin" width="32" height="32" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-12 sm:mb-16 mb-8 pt-8 gap-4 relative before:content-[''] before:absolute before:w-20 before:h-20 before:bg-[url('/images/footer/bgcir.png')] before:bg-no-repeat before:-left-36 before:bottom-9 lg:before:block before:hidden">
          <div className="md:col-span-2 col-span-6 mb-4 md:mb-0">
            <h4 className="text-18 text-white dark:text-white mb-4 font-bold">
              Platform
            </h4>
            <ul>
              {footerLinks.slice(0, 4).map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href="#"
                    className="text-foottext text-16 hover:text-primary transition-colors"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 col-span-6 mb-4 md:mb-0">
            <h4 className="text-18 text-white dark:text-white mb-4 font-bold">
              Resources
            </h4>
            <ul>
              {footerLinks.slice(4, 9).map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href="#"
                    className="text-foottext text-16 hover:text-primary transition-colors"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 col-span-6 mb-4 md:mb-0">
            <h4 className="text-18 text-white dark:text-white mb-4 font-bold">
              Security & Compliance
            </h4>
            <ul>
              {footerLinks.slice(9, 14).map((item, index) => (
                <li key={index} className="pb-3">
                  <Link
                    href="#"
                    className="text-foottext text-16 hover:text-primary transition-colors"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 col-span-12">
            <p className="text-19 text-white font-bold">Stay Updated with AI Insights</p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    // Clear status when user starts typing
                    if (submissionStatus.type) {
                      setSubmissionStatus({ type: null, message: '' });
                    }
                  }}
                  disabled={isSubmitting}
                  className="bg-search placeholder:text-foottext text-white! py-4 pl-5 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email.trim()}
                  className="text-22 text-foottext absolute right-5 top-4 hover:text-primary cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Icon icon="eos-icons:loading" width="20" height="20" className="animate-spin" />
                  ) : (
                    <Icon icon="solar:plain-2-linear" />
                  )}
                </button>
              </div>
              {/* Status Indicator */}
              {submissionStatus.type && (
                <div className={`mt-4 px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 ${
                  submissionStatus.type === 'success'
                    ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border border-red-500/30 text-red-400'
                }`}>
                  <Icon
                    icon={submissionStatus.type === 'success' ? 'solar:check-circle-bold' : 'solar:close-circle-bold'}
                    width="20"
                    height="20"
                    className={submissionStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}
                  />
                  <span className="text-sm font-medium">{submissionStatus.message}</span>
                  <button
                    onClick={() => setSubmissionStatus({ type: null, message: '' })}
                    className="ml-auto hover:opacity-70 transition-opacity"
                  >
                    <Icon icon="solar:close-bold" width="16" height="16" />
                  </button>
                </div>
              )}
            </form>
            <p className="text-19 text-white font-bold py-12">Enterprise Resources</p>
            <div className="flex gap-4">
              <Link href="/blog" className="hover:scale-105 transition-transform">
                <div className="bg-primary/10 border border-primary/30 rounded-lg px-6 py-3 hover:bg-primary/20 transition-colors">
                  <span className="text-white font-semibold">Case Studies</span>
                </div>
              </Link>
              <Link href="#" className="hover:scale-105 transition-transform">
                <div className="bg-primary/10 border border-primary/30 rounded-lg px-6 py-3 hover:bg-primary/20 transition-colors">
                  <span className="text-white font-semibold">White Papers</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col justify-between py-10 mt-8">
          <p className="text-16 text-foottext sm:mb-0 mb-4">
            © Copyright 2025. All rights reserved 
            {/* by{" "} */}
            {/* <span className="text-primary font-semibold">AI Rebates Platform</span> */}
            {" "}• Enterprise Rebates & Pricing Management Solution
          </p>
          <div className="flex gap-6">
            {footerLinks.slice(14, 17).map((item, index) => (
              <div key={index} className="">
                <Link href="#" className="text-foottext hover:text-primary transition-colors font-medium">
                  {item.link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
