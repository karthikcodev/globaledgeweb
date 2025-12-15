import { Users, Award, GraduationCap, Building2, Sparkles } from 'lucide-react';
import { useEffect, useState } from "react";

/* ------------------------------
   Count-Up Hook (Reused)
--------------------------------*/
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

export default function About() {
  // Animated stats
  const years = useCountUp(16);
  const students = useCountUp(16000);
  const mentors = useCountUp(230);
  const universities = useCountUp(600);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000" />
      
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8 sm:mb-12 animate-fade-in">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="h-1 w-10 sm:w-12 bg-gradient-to-r from-[#147CCB] to-blue-600 rounded-full"></div>
            <span className="text-gray-600 font-semibold text-sm sm:text-base uppercase tracking-wider">About us</span>
          </div>
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#147CCB] to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-spin-slow">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-[#147CCB] to-blue-600 bg-clip-text text-transparent">
                Hello, We are GLOBAL EDGE
              </span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 leading-relaxed">
              CSB is a <span className="font-semibold text-[#147CCB]">leading name</span> in the field of student counseling and visa services.
              We are driven by our <span className="font-semibold text-[#147CCB]">passion</span> to help students in pursuing their dreams of
              studying abroad. We are committed to our vision of connecting students to
              the best education opportunities available around the world.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              
              <div className="space-y-4 sm:space-y-6">

                {/* Years of Experience */}
                <div className="group bg-white hover:bg-gradient-to-br hover:from-[#147CCB] hover:to-blue-600 p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover:border-transparent">
                  <div className="flex items-center justify-between mb-3">
                    <Award className="w-7 sm:w-9 h-7 sm:h-9 text-[#147CCB] group-hover:text-white transition-colors" />
                    <div className="w-2 h-2 rounded-full bg-[#147CCB] group-hover:bg-white animate-pulse"></div>
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                    {years}+
                  </div>

                  <div className="text-gray-600 group-hover:text-blue-50 text-xs sm:text-sm font-medium transition-colors">
                    Years of Experience
                  </div>
                </div>

                {/* Students */}
                <div className="group bg-white hover:bg-gradient-to-br hover:from-[#147CCB] hover:to-blue-600 p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover:border-transparent">
                  <div className="flex items-center justify-between mb-3">
                    <GraduationCap className="w-7 sm:w-9 h-7 sm:h-9 text-[#147CCB] group-hover:text-white transition-colors" />
                    <div className="w-2 h-2 rounded-full bg-[#147CCB] group-hover:bg-white animate-pulse"></div>
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                    {students.toLocaleString()}+
                  </div>

                  <div className="text-gray-600 group-hover:text-blue-50 text-xs sm:text-sm font-medium transition-colors">
                    Students Successfully Recruited
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">

                {/* Mentors */}
                <div className="group bg-white hover:bg-gradient-to-br hover:from-[#147CCB] hover:to-blue-600 p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover:border-transparent">
                  <div className="flex items-center justify-between mb-3">
                    <Users className="w-7 sm:w-9 h-7 sm:h-9 text-[#147CCB] group-hover:text-white transition-colors" />
                    <div className="w-2 h-2 rounded-full bg-[#147CCB] group-hover:bg-white animate-pulse"></div>
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                    {mentors}+
                  </div>

                  <div className="text-gray-600 group-hover:text-blue-50 text-xs sm:text-sm font-medium transition-colors">
                    Mentors & Partners
                  </div>
                </div>

                {/* Universities */}
                <div className="group bg-white hover:bg-gradient-to-br hover:from-[#147CCB] hover:to-blue-600 p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 hover:border-transparent">
                  <div className="flex items-center justify-between mb-3">
                    <Building2 className="w-7 sm:w-9 h-7 sm:h-9 text-[#147CCB] group-hover:text-white transition-colors" />
                    <div className="w-2 h-2 rounded-full bg-[#147CCB] group-hover:bg-white animate-pulse"></div>
                  </div>

                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                    {universities}+
                  </div>

                  <div className="text-gray-600 group-hover:text-blue-50 text-xs sm:text-sm font-medium transition-colors">
                    Partner Universities
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0 animate-slide-in-right">
            <div className="relative group">
              
              {/* Decorative Background Shape */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#147CCB] via-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse-slow"></div>
              
              {/* Main Image Container */}
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Happy student"
                  className="relative rounded-2xl sm:rounded-3xl shadow-2xl w-full h-64 sm:h-80 lg:h-[500px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500 border-4 border-white"
                />
                
                {/* Decorative Corner Elements */}
                <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-[#147CCB] rounded-tl-2xl opacity-60"></div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-[#147CCB] rounded-br-2xl opacity-60"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-2xl animate-float border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#147CCB] to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{students.toLocaleString()}+</div>
                    <div className="text-gray-600 text-xs font-medium">Success Stories</div>
                  </div>
                </div>
              </div>

              {/* Additional Floating Element */}
              <div className="absolute top-6 right-6 bg-gradient-to-br from-[#147CCB] to-blue-600 px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-1000">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-white font-bold text-sm">Trusted Leader</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

    </section>
  );
}