import { MessageCircle, FileCheck, Plane, ArrowRight, Sparkles } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Consult',
      description: 'Discover what you need to do in order to apply for support for your field',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-[#147CCB] to-blue-600',
      icon: MessageCircle
    },
    {
      number: '02',
      title: 'Apply',
      description: 'We assist you throughout the application process to support your application',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-500 to-red-600',
      icon: FileCheck
    },
    {
      number: '03',
      title: 'Fly',
      description: 'Once approval is ready, prepare for your new country adventure',
      image: 'https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-[#147CCB] to-blue-600',
      icon: Plane
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#147CCB]/10 border border-[#147CCB]/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#147CCB]" />
            <span className="text-sm font-medium text-[#147CCB]">Our Process</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            How we work
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl font-semibold">
            Simple <span className="text-[#147CCB]">• </span> Effective <span className="text-[#147CCB]">• </span> Results-Driven
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-3 relative">
                
                {/* Connecting Arrow (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 z-20">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#147CCB] to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative mb-6 rounded-xl sm:rounded-2xl overflow-hidden h-48 sm:h-56 shadow-lg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Number Badge */}
                  {/* <div className={`absolute top-4 right-4 bg-gradient-to-br ${step.color} text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-xl ring-4 ring-white/30 group-hover:scale-110 transition-transform`}>
                    {step.number}
                  </div> */}

                  {/* Icon Badge (appears on hover) */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <step.icon className="w-6 h-6 text-[#147CCB]" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-[#147CCB] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Action */}
                <div className="mt-6 flex items-center gap-2 text-[#147CCB] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in animation-delay-800">
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            Ready to start your journey?
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#147CCB] to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105">
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
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

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}