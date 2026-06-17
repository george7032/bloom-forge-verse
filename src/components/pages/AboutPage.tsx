import Layout from "@/components/Layout";
import { Users, Target, Eye, Heart, BookOpen } from "lucide-react";
import kimImage from "@/assets/kim.jpeg";
import catherineImage from "@/assets/catherine.jpeg";
import ndegwaImage from "@/assets/ndegwa.jpeg";

export default function AboutPage() {
  return (
    <Layout>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">About Our Academy</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Nurturing young minds through quality education and joyful learning experiences
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", body: "To provide exceptional early childhood and primary education that develops confident, creative, and compassionate learners in a safe and nurturing environment." },
              { icon: Eye, title: "Our Vision", body: "To be the leading academy that combines academic excellence with fun learning, producing well-rounded students ready for future challenges." },
              { icon: Heart, title: "Our Values", body: "Excellence, Integrity, Compassion, Creativity, and Fun. We believe learning should be joyful while building strong character and values." },
            ].map((c) => (
              <div key={c.title} className="text-center hover-lift bg-card rounded-2xl p-8 shadow-soft">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <c.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Story & History</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-64 lg:h-80 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <BookOpen className="h-16 w-16 text-primary/60 mx-auto mb-4" />
                    <p className="text-primary font-semibold">School History</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Founded in 2000</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Embakasi Benedicta Academy was born from a vision to create a unique learning environment where academic excellence meets joyful experiences. Located in the heart of Embakasi, we started as a small preschool with just 30 children.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Growth & Innovation</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Within just four years, we've grown to serve over 500 families, expanding from preschool to a comprehensive primary school. Our innovative approach includes the first school-based amusement park in Embakasi.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Today & Tomorrow</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Today, we're proud to be recognized as a leading educational institution that successfully combines traditional learning with fun experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Meet Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: kimImage, name: "Mr. Kimani J. Mbugua", role: "Director and Founder", bio: "With 20+ years in educational leadership, Mr. Kimani oversees the strategic direction and ensures our academy maintains the highest standards of excellence." },
                { img: catherineImage, name: "Ms. Catherine Ngure", role: "General Manager", bio: "Ms. Catherine Ngure manages daily operations, staff coordination, and ensures smooth running of all academic and administrative activities throughout the school." },
                { img: ndegwaImage, name: "P. J. Ndegwa", role: "Head Teacher", bio: "With 15+ years in early childhood education, Mr. Ndegwa leads our academic programs with passion, ensuring every child receives personalized attention." },
              ].map((p) => (
                <div key={p.name} className="bg-card rounded-2xl p-8 shadow-soft hover-lift text-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{p.name}</h3>
                  <p className="text-primary font-semibold mb-4">{p.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{p.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">Our Unique Kids Amusement Park</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-80 bg-gradient-to-br from-accent-yellow/20 to-accent-green/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Users className="h-16 w-16 text-primary/60 mx-auto mb-4" />
                  <p className="text-primary font-semibold">Amusement Park</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">The First School in Embakasi with an Amusement Park!</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    ["Learning Through Play", "Our park features bounce houses, slides, and climbing structures that promote physical development while making learning enjoyable."],
                    ["Safe & Supervised", "All equipment is regularly inspected and maintained with trained staff supervising all activities."],
                    ["Weekend Fun", "Open to the community on weekends for birthday parties and family fun days."],
                    ["Character Building", "Group activities help children develop teamwork, sharing, and social skills."],
                  ].map(([title, body]) => (
                    <div key={title} className="bg-muted rounded-xl p-4">
                      <h4 className="text-lg font-bold mb-2 text-foreground">{title}</h4>
                      <p className="text-muted-foreground text-sm">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
