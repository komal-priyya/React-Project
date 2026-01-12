

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
// Local import for background image (adjust path as needed)
import clothe3 from "../img/clothe3.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      // Responsive height and background image
      className="relative min-h-[400px] h-[550px] sm:h-[650px] md:h-[700px] lg:h-[800px] flex items-center px-4"
      style={{
        backgroundImage: `url(${clothe3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-0" />

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row h-full justify-between items-center">
        {/* Text Section */}
        <div className="text-white max-w-xl space-y-6 md:space-y-8 py-8 md:py-0">
          <div
            className="font-semibold flex items-center text-lg md:text-xl uppercase tracking-widest"
            data-aos="fade-right"
          >
            <div className="w-8 h-1 rounded-full mr-4 bg-cyan-500" />
            Hot Trend
          </div>
          <h1
            className="uppercase text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold mb-2 leading-none drop-shadow-xl"
            data-aos="fade-down"
          >
            Fresh Fashion Finds
            <br />
            <span className="font-light text-yellow-300 md:text-white md:opacity-90 block" data-aos="fade-up">
              new collection
            </span>
          </h1>
          <p
            className="text-white/90 text-lg md:text-xl font-medium max-w-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover the season’s hottest clothes, books, shoes, and accessories—handpicked for style and comfort.
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
            <Link
              to="/"
              className="inline-block px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 font-semibold uppercase text-lg transition-all tracking-wider shadow-md shadow-black/20"
            >
              Explore More
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
