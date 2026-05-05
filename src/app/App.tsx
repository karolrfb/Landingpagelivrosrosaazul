import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturedBooks } from "./components/FeaturedBooks";
import { Categories } from "./components/Categories";
import { AboutSection } from "./components/AboutSection";
import { Testimonials } from "./components/Testimonials";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedBooks />
      <Categories />
      <AboutSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
