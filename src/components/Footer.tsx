import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Globe, Award, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0d3a5c] via-[#147CCB] to-[#1a5a8a] text-white relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse-slow animation-delay-2000"></div>

      <div className="section-container relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold">GLOBAL EDGE</div>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Certified Travel Agent</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 mb-1">Registration</div>
                    <div className="text-white font-semibold">BR 85416</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 mb-1">License</div>
                    <div className="text-white font-semibold">BRITISH 5416</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <div className="text-sm font-semibold mb-4">Follow Us</div>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white hover:text-[#147CCB] transition-all hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Head Office */}
            <div className="animate-fade-in animation-delay-200">
              <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Head Office
              </h3>
              <div className="space-y-4 text-blue-100">
                <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="font-semibold text-white mb-2">GLOBAL EDGE Study Abroad</div>
                  <p className="text-sm leading-relaxed">
                    Channels Mumbai, India<br />
                    Mumbai, Maharashtra 400001<br />
                    Road #11, Dhoranku
                  </p>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 mb-1">Email</div>
                    <a href="mailto:info@cssb.com" className="text-white font-semibold hover:text-blue-200 transition-colors">
                      info@globaledge.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-blue-200 mb-1">Phone</div>
                    <a href="tel:+1234567890" className="text-white font-semibold hover:text-blue-200 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in animation-delay-400">
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  'About Us',
                  'Our Services',
                  'Universities',
                  'Upcoming Events',
                  'Success Stories',
                  'Contact Us',
                  'Apply Now'
                ].map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="group flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Partner Universities */}
            <div className="animate-fade-in animation-delay-600">
              <h3 className="font-bold text-lg mb-6">Partner Universities</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { emoji: '🎓', name: 'Dalhousie' },
                  { emoji: '🏛️', name: 'Windsor' },
                  { emoji: '🎯', name: 'Toronto Metro' },
                  { emoji: '⭐', name: 'Brock' }
                ].map((uni, i) => (
                  <div 
                    key={i}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all cursor-pointer border border-white/10 hover:border-white/30 hover:scale-105"
                  >
                    <div className="text-3xl mb-2">{uni.emoji}</div>
                    <div className="text-xs text-blue-200 group-hover:text-white transition-colors font-medium">
                      {uni.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-sm font-semibold mb-3">Subscribe to Newsletter</div>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-blue-200 focus:outline-none focus:border-white/40"
                  />
                  <button className="px-4 py-2 bg-white text-[#147CCB] rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm">
              © 2025 <span className="font-semibold text-white">GLOBAL EDGE Study Abroad</span>. All rights reserved
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-blue-200">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certified Agency</span>
            </div>
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>50+ Countries</span>
            </div>
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span>🏆</span>
              <span>16+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
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
      `}</style>
    </footer>
  );
}