import { ArrowRight, BookOpen, FileText, Building2 } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      
      {/* Animated Decorative Background Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 opacity-20 blur-3xl rounded-full animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-200 opacity-20 blur-3xl rounded-full animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-200 opacity-20 blur-3xl rounded-full animate-blob animation-delay-4000"></div>

      <div className="section-container relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#147CCB]/10 border border-[#147CCB]/20 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#147CCB] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#147CCB]" />
            </span>
            <span className="text-sm font-medium text-[#147CCB]">What We Offer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Services for Students
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Comprehensive support for your study abroad journey
          </p>
        </div>

        {/* Cards Grid - Equal Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* CARD 1 - Student Counseling */}
          <div className="group animate-slide-up bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
            <div className="flex-shrink-0 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#147CCB] to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#147CCB] transition-colors">
              Student Counseling
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed flex-grow">
              Our advisors begin with IELTS/PTE/TOEFL guidance and help students
              explore the best education opportunities suited for their ambitions.
            </p>

            <button className="text-[#147CCB] font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all text-sm sm:text-base mt-auto">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* CARD 2 - Visa Counseling */}
          <div className="group animate-slide-up animation-delay-200 bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
            <div className="flex-shrink-0 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#147CCB] to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-7 h-7 text-white" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#147CCB] transition-colors">
              Visa Counseling
            </h3>

            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed flex-grow">
              Detailed guidance for completing visa applications smoothly and
              confidently for the student's chosen destination.
            </p>

            <button className="text-[#147CCB] font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all text-sm sm:text-base mt-auto">
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* CARD 3 - Choose University (Featured) */}
          <div className="group animate-slide-up animation-delay-400 bg-gradient-to-br from-[#147CCB] to-blue-600 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-700 flex flex-col h-full md:col-span-2 lg:col-span-1">
            <div className="flex-shrink-0 mb-6">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-7 h-7 text-white" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Choose a Suitable University
            </h3>

            <p className="text-blue-50 text-sm sm:text-base mb-6 leading-relaxed flex-grow">
              Personalized university recommendations tailored to your goals,
              background, and professional interests.
            </p>

            <button className="bg-white hover:bg-gray-50 text-[#147CCB] font-semibold px-4 sm:px-6 py-3 rounded-xl flex items-center justify-center space-x-3 transition-all text-sm sm:text-base group-hover:scale-105 shadow-lg mt-auto">
              <span>Consult with expert</span>
              <div className="bg-[#147CCB] text-white w-6 h-6 rounded-full flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          </div>

        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in animation-delay-600">
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Need help choosing the right service?
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-xl transition-all hover:scale-105">
            <span>Talk to Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
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