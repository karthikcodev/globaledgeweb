import { Award, ArrowRight, MapPin, Star, TrendingUp, Sparkles } from 'lucide-react';

export default function Universities() {
  const universities = [
    { 
      name: 'Dalhousie University', 
      location: 'Nova Scotia, Canada', 
      logo: '🎓',
      rating: '4.8',
      students: '20K+',
      color: 'from-blue-500 to-indigo-600'
    },
    { 
      name: 'University Of Windsor', 
      location: 'Ontario, Canada', 
      logo: '🏛️',
      rating: '4.7',
      students: '16K+',
      color: 'from-purple-500 to-pink-600'
    },
    { 
      name: 'Toronto Metro University', 
      location: 'Toronto, Canada', 
      logo: '🎯',
      rating: '4.9',
      students: '45K+',
      color: 'from-cyan-500 to-blue-600'
    },
    { 
      name: 'Brock University', 
      location: 'Ontario, Canada', 
      logo: '⭐',
      rating: '4.6',
      students: '19K+',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#147CCB]/10 border border-[#147CCB]/20 rounded-full mb-4">
            <Star className="w-4 h-4 text-[#147CCB]" />
            <span className="text-sm font-medium text-[#147CCB]">Top Institutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Discover Top-Rated Universities
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Want your favorite college or experience a wonderful institution in Ontario? <br className="hidden sm:block" />
            <span className="font-semibold text-[#147CCB]">Explore world-class education opportunities</span>
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {universities.map((uni, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-gray-100 hover:border-blue-200 relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${uni.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Logo with Gradient Ring */}
                <div className="relative inline-block mb-4">
                  <div className={`absolute inset-0 bg-gradient-to-br ${uni.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-4xl sm:text-5xl">{uni.logo}</div>
                  </div>
                </div>

                {/* University Name */}
                <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-900 group-hover:text-[#147CCB] transition-colors line-clamp-2 min-h-[3rem]">
                  {uni.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{uni.location}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-gray-700">{uni.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <TrendingUp className="w-4 h-4 text-[#147CCB]" />
                    <span className="text-xs font-medium">{uni.students}</span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className={`w-8 h-8 bg-gradient-to-br ${uni.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in animation-delay-600">
          <button className="group inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-[#147CCB]">
            <span>View All Universities</span>
            <div className="bg-[#147CCB] text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-[#147CCB] via-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl animate-fade-in animation-delay-800">
          
          {/* Decorative Elements */}
          <div className="absolute right-0 top-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full -mr-32 sm:-mr-48 -mt-32 sm:-mt-48 animate-pulse-slow"></div>
          <div className="absolute right-20 bottom-0 w-48 h-48 sm:w-72 sm:h-72 bg-white/5 rounded-full -mb-24 sm:-mb-36 animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute left-10 top-10 w-20 h-20 border-4 border-white/20 rounded-full"></div>
          <div className="absolute right-40 top-20 w-3 h-3 bg-white/40 rounded-full animate-ping"></div>
          <div className="absolute left-1/3 bottom-20 w-2 h-2 bg-white/30 rounded-full animate-ping animation-delay-500"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Award className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Premium Service</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Most services as people tend to enjoy institution events and we are glad to spread those too!
            </h3>
            
            <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-2xl">
              Join thousands of successful students who trusted us with their educational journey. 
              Get personalized guidance and exclusive access to university events.
            </p>

            <button className="group bg-white hover:bg-gray-50 text-[#147CCB] font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-xl flex items-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:scale-105 text-sm sm:text-base">
              <span>Get in Touch With Us</span>
              <div className="bg-[#147CCB] text-white w-7 h-7 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}