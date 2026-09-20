"use client";

import React from "react";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Custom SVG Icons matching the exact design
const ConsultationIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#0e1e38]"
  >
    {/* Circle outline with top-right gap */}
    <path
      d="M21 35C13.268 35 7 28.732 7 21C7 13.268 13.268 7 21 7C24.184 7 27.11 8.066 29.458 9.866"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Head circle */}
    <circle
      cx="20.5"
      cy="17.5"
      r="4.5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    {/* Body arc */}
    <path
      d="M13.5 28.5C13.5 25 16.5 23.5 20.5 23.5C24 23.5 26.5 24.8 27.2 27"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Checkmark top right */}
    <path
      d="M27.5 13.5L30 16L35 11"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LuxuryMaterialsIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#0e1e38]"
  >
    {/* Diamond Outline & Facets */}
    <path
      d="M22 20.5L28 13.5H16L22 20.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M16 13.5L12 20.5L22 31.5L32 20.5L28 13.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M12 20.5H32" stroke="currentColor" strokeWidth="1.8" />
    <path d="M22 20.5L16.5 31" stroke="currentColor" strokeWidth="1.8" />
    <path d="M22 20.5L27.5 31" stroke="currentColor" strokeWidth="1.8" />
    {/* Hammer/Pickaxe top left */}
    <path
      d="M11 15.5L17.5 9.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M13 8.5L18.5 14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Sparkles */}
    <path
      d="M10 11.5L11.5 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const WarrantyIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#0e1e38]"
  >
    {/* Outer Badge Circle */}
    <circle cx="21" cy="17" r="8.5" stroke="currentColor" strokeWidth="1.8" />
    {/* Inner Badge Circle */}
    <circle cx="21" cy="17" r="5" stroke="currentColor" strokeWidth="1.8" />
    {/* Ribbons */}
    <path
      d="M16.5 23.5L14 33L21 29L28 33L25.5 23.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Personal Design Consultation",
    description: "Work with our designers to create your perfect piece.",
    icon: <ConsultationIcon />,
  },
  {
    id: 2,
    title: "Crafted with Luxury Materials",
    description:
      "Only the finest diamonds, gemstones, and precious metals used.",
    icon: <LuxuryMaterialsIcon />,
  },
  {
    id: 3,
    title: "Lifetime Warranty",
    description:
      "Lifetime warranty on every piece, ensuring quality and lasting beauty.",
    icon: <WarrantyIcon />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-[#FCFCFC] py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none overflow-hidden z-0">
        <div className="absolute -right-64 md:-right-36 -bottom-48 md:-bottom-80 w-[544px] h-[544px] ">
          <div className="absolute inset-0  rounded-full bg-[#edf1f7]/80" />
          <div className="absolute -left-32 md:-left-48 bottom-2.5 md:bottom-0 w-[80%] h-[65%] md:w-[75%] md:h-[75%] rounded-full bg-[#15274B1A]/40" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#111827] tracking-tight">
            Why Choose MyJewel?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-none p-8 md:p-10 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100/60 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 flex items-center justify-center h-12 w-12">
                {feature.icon}
              </div>

              <h3 className="text-lg sm:text-[19px] font-serif font-semibold text-[#0e1e38] mb-3 leading-tight">
                {feature.title}
              </h3>

              <p className="text-sm text-gray-500 font-sans leading-relaxed max-w-[260px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
