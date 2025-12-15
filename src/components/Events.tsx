import { Calendar, MapPin, ArrowRight, Clock, Users, Sparkles } from 'lucide-react';

export default function Events() {
  const events = [
    {
      date: '23 August 24, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Arizona, USA',
      title: 'Executive Study Abroad Hotels in-House Fair',
      description: 'Special educational tour where you can book your program and arrive at our office to peacefully get information.',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: '100+',
      tag: 'Popular'
    },
    {
      date: '23 August 24, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Arizona, USA',
      title: 'Executive Study Abroad Hotels in-House Fair',
      description: 'Special program where you can participate in our university representatives fair.',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
      attendees: '150+',
      tag: 'Featured'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#147CCB]/10 border border-[#147CCB]/20 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-[#147CCB]" />
              <span className="text-sm font-medium text-[#147CCB]">Upcoming Events</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Study Abroad Events
            </h2>
          </div>

          <button className="group flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-[#147CCB] animate-fade-in animation-delay-200">
            <span>See All Events</span>
            <div className="bg-[#147CCB] text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 cursor-pointer transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#147CCB] to-blue-600 text-white rounded-full shadow-lg backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-semibold">{event.tag}</span>
                  </div>
                </div>

                {/* Attendees Badge */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                    <Users className="w-4 h-4 text-[#147CCB]" />
                    <span className="text-sm font-semibold text-gray-900">{event.attendees}</span>
                  </div>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
                    <div className="text-2xl font-bold text-[#147CCB]">23</div>
                    <div className="text-xs font-medium text-gray-600">AUG 2025</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#147CCB]" />
                    </div>
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#147CCB]" />
                    </div>
                    <span className="font-medium">{event.location}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#147CCB] transition-colors line-clamp-2">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-2">
                  {event.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>

                {/* Action Button */}
                <button className="group/btn w-full flex items-center justify-between px-6 py-3 bg-gradient-to-r from-[#147CCB] to-blue-600 hover:from-blue-600 hover:to-[#147CCB] text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-xl">
                  <span>Register Now</span>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 via-[#147CCB] to-indigo-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl animate-fade-in animation-delay-600">
          
          {/* Decorative Elements */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute left-0 bottom-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Don't Miss Out</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Join our exclusive events and connect with top universities
            </h3>
            
            <p className="text-blue-100 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Get personalized guidance, meet university representatives, and take the first step toward your dream education abroad.
            </p>

            <button className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-50 text-[#147CCB] font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <span>Subscribe for Event Updates</span>
              <ArrowRight className="w-5 h-5" />
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