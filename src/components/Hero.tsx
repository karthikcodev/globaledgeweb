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
    <section className="relative w-full overflow-hidden">

      {/* ----------- DESKTOP BACKGROUND IMAGE ----------- */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundPosition: "65% center",
        }}
      />

      {/* ----------- GRID LAYOUT FOR RESPONSIVE REORDERING ----------- */}
      <div
        className="
          relative z-10 container mx-auto
          grid grid-cols-1 md:grid-cols-2
          items-center
          px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20
          py-14 sm:py-20 lg:py-32
          gap-10
        "
      >

        {/* MOBILE IMAGE FIRST */}
        <div className="md:hidden w-full flex justify-center">
          <img
            src="/bg.png"
            alt="Study Abroad"
            className="w-full max-h-[320px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* ----------- TEXT CONTENT ----------- */}
        <div className="max-w-md sm:max-w-xl md:max-w-2xl order-2 md:order-1">

          {/* Badge */}
          <div className="
            inline-flex items-center gap-2 
            px-3 py-1.5 sm:px-4 sm:py-2
            bg-blue-50 border border-blue-200 rounded-full
            mb-4 sm:mb-6 animate-slide-fade
          ">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-[#19377f] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#19377f]"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#19377f]">
              Your Journey Starts Here
            </span>
          </div>

          {/* Heading */}
          <h1 className="
            font-bold text-[#19377f] leading-tight animate-slide-fade
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
          ">
            Expert Study Abroad <br className="hidden sm:block" />
            Guidance
          </h1>

          {/* Subtext */}
          <p className="
            mt-3 sm:mt-4 text-[#19377f] animate-slide-fade animation-delay-200
            max-w-xs sm:max-w-md md:max-w-lg
            text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
            leading-relaxed
          ">
            Helping students build a{" "}
            <span className="font-semibold">global future</span>{" "}
            with personalized counselling, course selection, visa support,
            and complete study abroad assistance.
          </p>

          {/* Stats */}
          <div className="
            mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3
            animate-slide-fade animation-delay-400
          ">
            <StatBox label="Success Rate" value={`${successRate}%`} />
            <StatBox label="Expert Counsellors" value={`${expertCounsellors}+`} />
            <StatBox label="Countries" value={`${countries}+`} />
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 animate-slide-fade animation-delay-600">
            <button className="
              bg-[#19377f] text-white font-semibold rounded-lg shadow-lg
              px-6 sm:px-8 py-3 sm:py-4
              hover:shadow-xl hover:scale-105 transition duration-300
              text-sm sm:text-base md:text-lg
            ">
              <span className="flex items-center gap-2">
                Get Free Counselling
                <svg className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* ----------- DESKTOP IMAGE ON THE RIGHT ----------- */}
        <div className="hidden md:flex justify-end order-2 md:order-2">
          <img
            src="/bg.png"
            alt="Study Abroad"
            className="w-[90%] max-h-[500px] object-cover rounded-2xl shadow-xl"
          />
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

function StatBox({ value, label }) {
  return (
    <div className="
      bg-white border border-gray-200 shadow-sm rounded-lg 
      px-3 sm:px-5 py-2 sm:py-2.5
      w-full xs:w-auto sm:w-auto
    ">
      <span className="text-[#19377f] font-medium text-xs sm:text-sm md:text-base">
        {value} {label}
      </span>
    </div>
  );
}
