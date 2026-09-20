import Image from "next/image";
import FillerOne from "@/assets/custome-jewlery/custome-jewlery-filler.png";
import FillerTwo from "@/assets/custome-jewlery/custom-jewley-filler-two.png";

const steps = [
  {
    number: "01",
    title: "CONSULTATION",
    description:
      "We discuss your vision and preferences to craft a unique design.",
  },
  {
    number: "02",
    title: "SELECTING MATERIALS",
    description:
      "Choose from exquisite diamonds, precious metals, and gemstones.",
  },
  {
    number: "03",
    title: "CREATING A 3D MODEL",
    description:
      "Visualize your design with a precise 3D model before production.",
  },
  {
    number: "04",
    title: "MANUFACTURING",
    description:
      "Expert artisans bring your piece to life with precision and care.",
  },
  {
    number: "05",
    title: "QUALITY ASSURANCE",
    description: "Every detail is inspected to ensure flawless craftsmanship.",
  },
  {
    number: "06",
    title: "DELIVERY",
    description:
      "Your custom jewelry is elegantly packaged and delivered to you.",
  },
];

export default function CustomJewelrySection() {
  return (
    <section className="overflow-hidden bg-white px-6 py-16 sm:px-8 md:px-12 md:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto mb-10 max-w-7xl">
        <span className="text-[#7A7A7A] text-[14px] ">
          Home / Custom Jewelry
        </span>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0.5 md:gap-12 lg:grid-cols-12 lg:gap-x-16 xl:gap-x-20">
        <div className="flex flex-col lg:col-span-5">
          <div className="mb-10">
            <span className="font-dm-sans text-3xl font-medium uppercase tracking-widest text-[#101010] sm:text-4xl">
              Custom Jewelry
            </span>

            <h2 className="mt-4 font-dm-sans text-lg font-normal leading-snug text-[#434343] sm:text-xl">
              Create Your Masterpiece: Bespoke Jewelry Crafted for You
            </h2>
          </div>

          <div className="hidden md:block relative mx-auto h-[400px] w-full max-w-[480px] sm:h-[480px] lg:mx-0">
            {/* Main Image */}
            <div className="absolute left-0 top-0 h-[90%] w-[80%] overflow-hidden bg-slate-100 shadow-md">
              <Image
                src={FillerOne}
                alt="Bespoke ring creation"
                fill
                sizes="(max-width: 640px) 80vw, 480px"
                className="object-cover"
              />
            </div>

            {/* Foreground Image */}
            <div className="absolute -bottom-16 -right-4 h-[70%] w-[58%] overflow-hidden border-4 border-white bg-slate-200 shadow-xl sm:-right-8">
              <Image
                src={FillerTwo}
                alt="Detailed diamond ring view"
                fill
                sizes="(max-width: 640px) 55vw, 280px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:col-span-7 lg:pl-6">
          <p className="hidden md:block mb-3 md:mb-6 text-sm leading-relaxed text-[#434343] sm:text-base">
            Exquisite design, flawless craftsmanship, and timeless elegance—your
            vision, perfectly crafted.
          </p>

          <div className="divide-y divide-slate-100">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group py-6 first:pt-0 last:pb-0"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="shrink-0 pt-1 text-lg font-semibold tracking-wider text-slate-400 sm:text-xl">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-base font-medium tracking-wide text-[#101010] transition-colors group-hover:text-slate-600 sm:text-lg md:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE ONLY*/}

        <p className="block mt-1.5 md:hidden mb-3 md:mb-6 text-sm leading-relaxed text-[#434343] sm:text-base">
          Exquisite design, flawless craftsmanship, and timeless elegance—your
          vision, perfectly crafted.
        </p>
        <div className="mt-2 relative mx-auto block h-[400px] w-full max-w-[480px] lg:hidden">
          <div className="absolute left-0 top-0 h-[90%] w-[70%] overflow-hidden bg-slate-100 shadow-md">
            <Image
              src={FillerOne}
              alt="Bespoke ring creation"
              fill
              sizes="80vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-16 -right-4 h-[68%] w-[52%] overflow-hidden border-4 border-white bg-slate-200 shadow-xl sm:-right-8">
            <Image
              src={FillerTwo}
              alt="Detailed diamond ring view"
              fill
              sizes="55vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
