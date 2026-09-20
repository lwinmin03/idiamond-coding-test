"use client";

import Image from "next/image";
import Link from "next/link";
import whiteDiamond from "@/assets/explore-more/White-diamond.png";
import { ExternalLink } from "lucide-react";

interface GuideLink {
  title: string;
  href: string;
}

const guideLinks: GuideLink[] = [
  {
    title: "How to Select the Ideal Wedding Band",
    href: "/guides/wedding-band",
  },
  {
    title: "Lab Grown Diamond Guide",
    href: "/guides/lab-grown-diamonds",
  },
  {
    title: "How to Choose the Engagement Ring",
    href: "/guides/engagement-ring",
  },
  {
    title: "Ring Size Guide",
    href: "/guides/ring-size",
  },
];

export default function ExploreMore() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-14 lg:py-20 xl:px-16">
          <div className="mx-auto w-full max-w-xl lg:ml-auto lg:mr-0">
            <h2 className="mb-3 font-serif text-3xl font-normal tracking-tight text-gray-900 sm:text-4xl">
              Explore More
            </h2>

            <p className="mb-8 max-w-lg text-sm leading-6 text-gray-500 sm:mb-10 sm:text-base">
              Looking for more diamond guides, buying tips or details about the
              4Cs? Explore more of our diamond education pages:
            </p>

            <div className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7">
              {guideLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex min-w-0 items-center justify-between gap-3 text-gray-700 transition-colors hover:text-black"
                >
                  <span className="min-w-0 text-sm font-medium leading-5 sm:text-[15px]">
                    <span className="border-b border-transparent transition-all group-hover:border-black">
                      {item.title}
                    </span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all group-hover:border-black group-hover:bg-black group-hover:text-white sm:h-10 sm:w-10">
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-[280px] w-full sm:h-[360px] md:h-[420px] lg:h-auto lg:min-h-[500px]">
          <Image
            src={whiteDiamond}
            alt="Jewelry model showcasing diamond necklace and ring"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
