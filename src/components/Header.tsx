import React, { useState, useRef, useEffect } from "react";
import { Search, Menu, X, Globe, Phone, Mail, ChevronDown, MapPin, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const countriesRef = useRef(null);

  const countries = [
    { name: "Canada", flag: "🇨🇦", popular: true },
    { name: "United Kingdom", flag: "🇬🇧", popular: true },
    { name: "Ireland", flag: "🇮🇪", popular: false },
    { name: "Germany", flag: "🇩🇪", popular: false },
    { name: "Australia", flag: "🇦🇺", popular: true },
    { name: "Dubai", flag: "🇦🇪", popular: false },
  ];

  useEffect(() => {
    function onDocClick(e) {
      if (countriesRef.current && !countriesRef.current.contains(e.target)) {
        setCountriesOpen(false);
      }
    }
    
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    
    document.addEventListener("click", onDocClick);
    window.addEventListener("scroll", onScroll);
    
    return () => {
      document.removeEventListener("click", onDocClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}
            style={{ background: 'white' }}>
      
      {/* Top Info Strip */}
      <div className="hidden lg:flex items-center justify-between px-6 py-2.5 bg-gradient-to-r from-[#147CCB] to-blue-600">
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            <a href="tel:+911148475000" className="font-medium">
              +91-11-48475000
            </a>
          </div>

          <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            <a href="mailto:office@cssb.com" className="font-medium">
              office@cssb.com
            </a>
          </div>

          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Mumbai, Maharashtra</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-white text-sm">
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">Trusted partners across 50+ countries • 16+ years experience</span>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#147CCB] to-blue-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#147CCB] to-blue-600 shadow-lg group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <a href="/" className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-[#147CCB] transition-colors">
                GLOBAL EDGE
              </a>
              <div className="text-xs text-gray-600 font-medium">
                Study Abroad Consultants
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/" className="text-sm font-semibold text-gray-900 hover:text-[#147CCB] transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#147CCB] group-hover:w-full transition-all"></span>
            </a>

            {/* Countries Dropdown */}
            <div className="relative" ref={countriesRef}>
              <button
                onClick={() => setCountriesOpen((s) => !s)}
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#147CCB] transition-colors"
                aria-expanded={countriesOpen}
              >
                Countries
                <ChevronDown className={`w-4 h-4 transform transition-transform ${countriesOpen ? "rotate-180" : ""}`} />
              </button>

              {countriesOpen && (
                <div className="absolute left-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-dropdown">
                  <div className="p-2">
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Popular Destinations
                    </div>
                    {countries.filter(c => c.popular).map((c) => (
                      <a 
                        key={c.name} 
                        href={`/countries/${c.name.toLowerCase()}`} 
                        className="flex items-center gap-3 px-4 py-3 text-sm rounded-xl hover:bg-blue-50 transition-colors group"
                      >
                        <span className="text-2xl">{c.flag}</span>
                        <span className="font-medium text-gray-700 group-hover:text-[#147CCB]">{c.name}</span>
                      </a>
                    ))}
                    
                    <div className="h-px bg-gray-200 my-2"></div>
                    
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Other Countries
                    </div>
                    {countries.filter(c => !c.popular).map((c) => (
                      <a 
                        key={c.name} 
                        href={`/countries/${c.name.toLowerCase()}`} 
                        className="flex items-center gap-3 px-4 py-3 text-sm rounded-xl hover:bg-blue-50 transition-colors group"
                      >
                        <span className="text-2xl">{c.flag}</span>
                        <span className="font-medium text-gray-700 group-hover:text-[#147CCB]">{c.name}</span>
                      </a>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-100 bg-gray-50 p-2">
                    <a href="/countries" className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-[#147CCB] hover:bg-blue-50 rounded-lg transition-colors">
                      View All Countries
                      <ChevronDown className="w-4 h-4 -rotate-90" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="/services" className="text-sm font-semibold text-gray-700 hover:text-[#147CCB] transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#147CCB] group-hover:w-full transition-all"></span>
            </a>
            <a href="/universities" className="text-sm font-semibold text-gray-700 hover:text-[#147CCB] transition-colors relative group">
              Universities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#147CCB] group-hover:w-full transition-all"></span>
            </a>
            <a href="/about" className="text-sm font-semibold text-gray-700 hover:text-[#147CCB] transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#147CCB] group-hover:w-full transition-all"></span>
            </a>
            <a href="/contact" className="text-sm font-semibold text-gray-700 hover:text-[#147CCB] transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#147CCB] group-hover:w-full transition-all"></span>
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden lg:inline-flex p-2.5 rounded-full hover:bg-gray-100 transition-colors" aria-label="Search">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            <a href="/apply" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold shadow-lg bg-gradient-to-r from-[#147CCB] to-blue-600 text-white hover:shadow-xl hover:scale-105 transition-all">
              Apply Now
            </a>

            <a href="/contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-gray-200 font-semibold text-gray-700 hover:border-[#147CCB] hover:text-[#147CCB] transition-all">
              Contact Us
            </a>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-2" onClick={() => setMobileOpen((s) => !s)} aria-label="Toggle menu">
              {mobileOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 animate-slide-down">
            <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              
              {/* Mobile Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#147CCB] to-blue-600">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">GLOBAL EDGE</div>
                    <div className="text-xs text-gray-600">Study Abroad</div>
                  </div>
                </div>
                <a href="/apply" className="px-4 py-2 rounded-lg bg-[#147CCB] text-white font-semibold text-sm">
                  Apply
                </a>
              </div>

              <a href="/" className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-900 hover:bg-blue-50 hover:text-[#147CCB] transition-colors">
                Home
              </a>

              {/* Countries in Mobile */}
              <div className="space-y-2">
                <div className="text-sm font-bold text-gray-900 px-4">Countries</div>
                <div className="grid grid-cols-2 gap-2 px-4">
                  {countries.map((c) => (
                    <a 
                      key={c.name} 
                      href={`/countries/${c.name.toLowerCase()}`} 
                      className="flex flex-col items-center gap-2 px-3 py-3 rounded-xl border border-gray-200 hover:border-[#147CCB] hover:bg-blue-50 transition-all text-center"
                    >
                      <span className="text-2xl">{c.flag}</span>
                      <span className="text-xs font-medium text-gray-700">{c.name}</span>
                    </a>
                  ))}
                </div>
                <a href="/countries" className="block px-4 text-sm text-[#147CCB] font-semibold">
                  See all countries →
                </a>
              </div>

              <a href="/services" className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-900 hover:bg-blue-50 hover:text-[#147CCB] transition-colors">
                Services
              </a>
              <a href="/universities" className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-900 hover:bg-blue-50 hover:text-[#147CCB] transition-colors">
                Universities
              </a>
              <a href="/about" className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-900 hover:bg-blue-50 hover:text-[#147CCB] transition-colors">
                About
              </a>

              {/* Contact Info in Mobile */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="text-sm font-bold text-gray-900">Contact Us</div>
                <a href="tel:+911148475000" className="flex items-center gap-3 text-sm text-gray-700">
                  <Phone className="w-4 h-4 text-[#147CCB]" />
                  <span>+91-11-48475000</span>
                </a>
                <a href="mailto:office@cssb.com" className="flex items-center gap-3 text-sm text-gray-700">
                  <Mail className="w-4 h-4 text-[#147CCB]" />
                  <span>office@globaledge.com</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-gray-700">
                  <MapPin className="w-4 h-4 text-[#147CCB] mt-0.5" />
                  <div>
                    <div className="font-semibold">Mumbai Office</div>
                    <div className="text-xs text-gray-600">Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes dropdown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 100vh;
          }
        }

        .animate-dropdown {
          animation: dropdown 0.2s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}