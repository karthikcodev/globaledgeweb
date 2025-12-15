import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import Universities from './components/Universities';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <Universities />
      <Testimonials />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
