import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Enterprise Rebates, Pricing & Agreements Platform",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Get in Touch"
        description="Schedule a consultation with our team to discover how our platform can transform your rebates, pricing, and agreements management."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactForm />
      {/* <ContactInfo />
      
      <Location /> */}
    </>
  );
};

export default page;
