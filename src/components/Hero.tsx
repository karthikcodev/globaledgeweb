import { useEffect, useState } from "react";

function useCountUp(end, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setValue(end);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return value;
}

export default function Hero() {
  const successRate = useCountUp(100);
  const expertCounsellors = useCountUp(250);
  const countries = useCountUp(50);

  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundPosition: "65% center",
        }}
      ></div>

      {/* Text Container */}
      <div className="relative z-10 container mx-auto h-full flex items-center 
px-4 sm:px-8 md:px-12 lg:px-16 
pt-10 sm:pt-16 lg:pt-20 
pb-20 sm:pb-28 md:pb-32 lg:pb-40">

        <div className="max-w-xl sm:max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 border border-blue-200 rounded-full mb-4 sm:mb-6 animate-slide-fade">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#19377f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#19377f]"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#19377f]">Your Journey Starts Here</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#19377f] animate-slide-fade">
            Expert Study Abroad <br className="hidden sm:block" /> Guidance
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-3 sm:mt-4 text-[#19377f] leading-relaxed animate-slide-fade animation-delay-200 max-w-lg">
            Helping students build a <span className="font-semibold">global future</span> with personalized counselling,
            course selection, visa support, and complete study abroad assistance.
          </p>

          {/* Count-Up Features */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 animate-slide-fade animation-delay-400">

            {/* 100% Success Rate */}
            <div className="flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 bg-white rounded-lg shadow-sm border border-gray-200 w-full xs:w-auto sm:w-auto">
              <span className="text-[#19377f] text-xs sm:text-sm font-medium">
                {successRate}% Success Rate
              </span>
            </div>

            {/* Expert Counsellors */}
            <div className="flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 bg-white rounded-lg shadow-sm border border-gray-200 w-full xs:w-auto sm:w-auto">
              <span className="text-[#19377f] text-xs sm:text-sm font-medium">
                {expertCounsellors}+ Expert Counsellors
              </span>
            </div>

            {/* Countries */}
            <div className="flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 bg-white rounded-lg shadow-sm border border-gray-200 w-full xs:w-auto sm:w-auto">
              <span className="text-[#19377f] text-xs sm:text-sm font-medium">
                {countries}+ Countries
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 animate-slide-fade animation-delay-600">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#19377f] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              <span className="relative z-10 flex items-center gap-2">
                Get Free Counselling
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideFade {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-fade {
          animation: slideFade 0.8s ease-out forwards;
        }

        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; }
        .animation-delay-400 { animation-delay: 0.4s; opacity: 0; }
        .animation-delay-600 { animation-delay: 0.6s; opacity: 0; }
      `}</style>

    </section>
  );
}
