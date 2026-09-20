"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetTestimonials } from "@/hooks/use-get-Testimonials";

export interface Testimonial {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  university: string;
  userAgent: string;
}

export default function TestimonialsSection() {
  const { data, isLoading, isError } = useGetTestimonials();

  const testimonials: Testimonial[] = data?.users || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalItems = testimonials.length;

  const prevSlide = () => {
    if (totalItems === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (totalItems === 0) return;
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    if (totalItems === 0) return [];
    return Array.from({ length: totalItems }, (_, index) => {
      return testimonials[(currentIndex + index) % totalItems];
    });
  };

  if (isLoading) {
    return (
      <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center font-serif text-3xl font-normal tracking-wide text-slate-900 md:text-4xl">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className={`h-[340px] animate-pulse rounded-lg border border-slate-200 bg-slate-50 ${
                  index >= 1 ? "hidden sm:block" : "block"
                } ${index >= 2 ? "hidden lg:block" : "block"}`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="bg-white px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 font-serif text-3xl text-slate-900">
            Testimonials
          </h2>
          <p className="text-sm text-slate-500">Unable to load testimonials.</p>
        </div>
      </section>
    );
  }

  if (totalItems === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-8 md:px-12 md:py-24 lg:px-20">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-14 md:mb-16">
          <h2 className="font-serif text-3xl font-normal tracking-wide text-slate-900 sm:text-4xl">
            Testimonials
          </h2>
        </div>

        <div className="relative flex items-center">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="
              absolute left-0 z-20
              flex h-9 w-9 items-center justify-center
              rounded-full border border-slate-200 bg-white
              text-slate-700 shadow-sm
              transition hover:bg-slate-50
              sm:-left-2 sm:h-10 sm:w-10
              md:-left-5
            "
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <div className="w-full overflow-hidden px-8 sm:px-10 md:px-8">
            <motion.div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                sm:gap-5
                lg:grid-cols-4
                lg:gap-6
              "
              layout
            >
              <AnimatePresence mode="popLayout">
                {getVisibleTestimonials()
                  .slice(0, 4)
                  .map((item, index) => (
                    <motion.article
                      key={item.id}
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -40,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className={`
                        ${index >= 1 ? "hidden sm:flex" : "flex"}
                        ${index >= 2 ? "hidden lg:flex" : "flex"}
                        min-h-[320px]
                        flex-col items-center
                        justify-between
                        rounded-lg
                        border border-slate-200
                        bg-white
                        p-6
                        text-center
                        shadow-sm
                        sm:min-h-[330px]
                        sm:p-7
                        lg:min-h-[340px]
                        lg:p-8
                      `}
                    >
                      <div className="relative mb-5 h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100 shadow-sm">
                        <Image
                          src={item.image}
                          alt={`${item.firstName} ${item.lastName}`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="mb-4">
                        <h3 className="text-base font-medium text-slate-900">
                          {item.firstName} {item.lastName}
                        </h3>

                        <p className="mt-1 text-xs text-slate-400">
                          {item.university}
                        </p>
                      </div>

                      <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                        "{item.userAgent}"
                      </p>
                    </motion.article>
                  ))}
              </AnimatePresence>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="
              absolute right-0 z-20
              flex h-9 w-9 items-center justify-center
              rounded-full border border-slate-200 bg-white
              text-slate-700 shadow-sm
              transition hover:bg-slate-50
              sm:-right-2 sm:h-10 sm:w-10
              md:-right-5
            "
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`
                rounded-full transition-all duration-300
                ${
                  currentIndex === index
                    ? "h-3 w-3 bg-slate-800"
                    : "h-2 w-2 bg-slate-300 hover:bg-slate-400"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
