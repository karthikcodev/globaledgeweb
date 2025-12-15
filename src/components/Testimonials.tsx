import { Star, ArrowLeft, ArrowRight, Quote, GraduationCap, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Zulqar Hassan Butt',
      university: 'Humber College',
      rating: 5,
      text: 'GLOBAL EDGE assisted me to get into my dream university in Canada. I especially appreciate how GLOBAL EDGE has been remarkably supportive and trustworthy. Thanks to the entire team for your efforts to realize my dreams!',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: 'Canada'
    },
    {
      name: 'Mahmuzur Khaiun',
      university: 'Algonquin College',
      rating: 5,
      text: 'Outstanding service from Kingsway! They guided me through every step of the application process and I got accepted to my first choice university. The team was always available to answer my questions.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: 'Canada'
    },
    {
      name: 'Maria Alluri Nduto',
      university: 'University of Manitoba',
      rating: 5,
      text: 'I highly recommend GLOBAL EDGE for anyone looking to study abroad. Their expertise in visa counseling saved me so much stress. Professional, reliable, and truly care about student success!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      country: 'Canada'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#147CCB]/10 border border-[#147CCB]/20 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#147CCB]" />
              <span className="text-sm font-medium text-[#147CCB]">Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                What our
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#147CCB] to-blue-600 bg-clip-text text-transparent">
                students say
              </span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 sm:gap-4 animate-fade-in animation-delay-200">
            <button 
              onClick={handlePrev}
              className="group bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#147CCB] w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-xl hover:scale-110"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-[#147CCB] transition-colors" />
            </button>
            <button 
              onClick={handleNext}
              className="group bg-gradient-to-r from-[#147CCB] to-blue-600 hover:from-blue-600 hover:to-[#147CCB] text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-2xl hover:scale-110"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-20 h-20 sm:w-24 sm:h-24 text-[#147CCB]" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="animate-star-pop" style={{ animationDelay: `${i * 100}ms` }}>
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                  </div>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed relative z-10 min-h-[6rem]">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

              {/* Author Info */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#147CCB] to-blue-600 rounded-full blur-md opacity-40"></div>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#147CCB] to-blue-600 rounded-full flex items-center justify-center ring-2 ring-white">
                    <GraduationCap className="w-3 h-3 text-white" />
                  </div>
                </div>
                
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-base sm:text-lg text-gray-900 truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 truncate flex items-center gap-2">
                    <span>{testimonial.university}</span>
                  </div>
                  <div className="text-xs text-[#147CCB] font-medium mt-1">
                    📍 {testimonial.country}
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-[#147CCB]/5 to-blue-600/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Banner */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-fade-in animation-delay-600">
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100">
            <div className="text-3xl sm:text-4xl font-bold text-[#147CCB] mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Students</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100">
            <div className="text-3xl sm:text-4xl font-bold text-[#147CCB] mb-2">98%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100">
            <div className="text-3xl sm:text-4xl font-bold text-[#147CCB] mb-2">15+</div>
            <div className="text-sm text-gray-600">Countries</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100">
            <div className="text-3xl sm:text-4xl font-bold text-[#147CCB] mb-2">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
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

        @keyframes star-pop {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
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

        .animate-star-pop {
          animation: star-pop 0.5s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}