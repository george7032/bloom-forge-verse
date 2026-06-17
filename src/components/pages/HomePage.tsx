import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import Layout from "@/components/Layout";
import { ChevronLeft, ChevronRight, Star, Users, BookOpen, Trophy } from "lucide-react";
import hero6 from "@/assets/hero-6.jpeg";
import hero7 from "@/assets/hero-7.jpeg";
import hero8 from "@/assets/hero-8.jpeg";
import hero9 from "@/assets/hero-9.jpeg";
import hero10 from "@/assets/hero-10.jpeg";

const heroImages = [
  { src: hero6, title: "Beautiful Institution" },
  { src: hero7, title: "Environment Friendly" },
  { src: hero8, title: "Library" },
  { src: hero9, title: "Amusement Park" },
  { src: hero10, title: "Enjoyment" },
];

const testimonials = [
  { name: "Geoffrey Otieno", role: "Parent", content: "My daughter loves coming to school every day! The combination of learning and play is perfect.", rating: 5 },
  { name: "John Kariuki", role: "Parent", content: "The amusement park was a game-changer. My son has improved academically and socially.", rating: 5 },
  { name: "Grace Njeri", role: "Parent", content: "Excellent teachers and facilities. The best decision we made for our child's education.", rating: 5 },
];

const stats = [
  { icon: Users, number: "500+", label: "Happy Students" },
  { icon: BookOpen, number: "20+", label: "Qualified Teachers" },
  { icon: Trophy, number: "10+", label: "Awards Won" },
  { icon: Star, number: "5", label: "Star Rating" },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrentSlide((p) => (p + 1) % heroImages.length);
  const prev = () => setCurrentSlide((p) => (p - 1 + heroImages.length) % heroImages.length);

  return (
    <Layout>
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentSlide ? "translate-x-0" : "translate-x-full"}`}
              style={{ backgroundImage: `url(${image.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
              A Nurturing Space for Young Minds! at
              <br />
              <span className="text-accent-yellow">Embakasi Benedicta Academy!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/90 animate-slide-up">
              Experience the perfect blend of quality education and joyful learning with our unique kids amusement park —
              the first of its kind in Embakasi!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
              <Link to="/about" className="btn-primary">About Us</Link>
              <Link to="/programs" className="btn-secondary">Our Programs</Link>
              <Link to="/park" className="btn-yellow">Visit Amusement Park</Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} aria-label={`Slide ${index + 1}`} className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`} />
          ))}
        </div>

        <button onClick={prev} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button onClick={next} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-all">
          <ChevronRight className="h-6 w-6" />
        </button>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">Welcome to Excellence in Education</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              At Embakasi Benedicta Academy, we believe that learning should be both meaningful and enjoyable.
              Our innovative approach combines traditional academic excellence with the joy of play through
              our state-of-the-art kids amusement park, creating an environment where children thrive
              academically, socially, and emotionally.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">What Parents Say About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div key={t.name} className="testimonial-card hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent-yellow fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{t.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Amazing Amusement Park</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              The first school in Embakasi with its own kids amusement park! Where learning meets fun every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"><Star className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-3">Bouncing Castles</h3>
              <p className="text-white/90">Multiple colorful bouncing castles for endless fun and physical activity.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"><Trophy className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-3">Adventure Slides</h3>
              <p className="text-white/90">Safe and exciting slides that provide thrill while building confidence.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"><Users className="h-8 w-8 text-white" /></div>
              <h3 className="text-xl font-bold mb-3">Birthday Parties</h3>
              <p className="text-white/90">Host unforgettable birthday celebrations in our dedicated party areas.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/park" className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 inline-block">
              Explore Our Amusement Park
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Join Our Academy Family?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Give your child the gift of quality education combined with joyful learning experiences.
            Schedule a visit today and see the difference for yourself!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 inline-block">
              Contact Us Today
            </Link>
            <Link to="/park" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all inline-block">
              Visit Amusement Park
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
