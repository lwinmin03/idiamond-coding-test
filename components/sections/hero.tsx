import Image from "next/image";
import HeroImg from "@/public/hero.png";
import MobileBanner from "@/assets/mobile-banner.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[420px]">
      <div className="block md:hidden relative w-full h-full">
        <Image
          src={MobileBanner}
          alt="Hero Mobile Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="hidden md:block relative w-full h-full">
        <Image
          src={HeroImg}
          alt="Hero Image"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
