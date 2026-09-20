import Hero from "@/components/sections/hero";
import CustomJewelrySection from "@/components/sections/custom-jewery";
import ExploreMoreSection from "@/components/sections/explore-more";
import TestimonialsSection from "@/components/sections/testimonials";
import Testimonials from "@/components/sections/testimonials";
import WhyChooseUsSection from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <CustomJewelrySection />
      <WhyChooseUsSection />
      <ExploreMoreSection />
      <TestimonialsSection />
    </main>
  );
}
