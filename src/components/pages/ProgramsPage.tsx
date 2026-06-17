import Layout from "@/components/Layout";
import { BookOpen, Users, GraduationCap } from "lucide-react";
import kindergartenImage from "@/assets/kindergarten.jpeg";
import lowerPrimaryImage from "@/assets/upper.jpeg";
import juniorSecondaryImage from "@/assets/jss.jpeg";

const images = [kindergartenImage, lowerPrimaryImage, juniorSecondaryImage];

const programs = [
  {
    title: "Kindergarten Program",
    age: "3-5 Years",
    icon: BookOpen,
    color: "from-pink-400 to-pink-600",
    features: ["Play-based learning approach", "Pre-reading and pre-math skills", "Creative arts and crafts", "Social and emotional development", "Outdoor play and exploration", "Story time and language development"],
  },
  {
    title: "Lower Primary (CBC)",
    age: "6-9 Years",
    icon: Users,
    color: "from-blue-400 to-blue-600",
    features: ["Grade 1-6 CBC curriculum", "Foundational literacy and numeracy", "Creative arts and physical education", "Environmental activities", "Digital literacy basics", "Character and values education"],
  },
  {
    title: "Junior Secondary",
    age: "10-14 Years",
    icon: GraduationCap,
    color: "from-green-400 to-green-600",
    features: ["Grade 7-9 CBC curriculum", "Competency-based assessments", "Advanced digital literacy", "Critical thinking development", "Project-based learning", "Life skills and career guidance"],
  },
];

export default function ProgramsPage() {
  return (
    <Layout>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Our Programs</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Comprehensive education from Kindergarten to Junior Secondary with the CBC curriculum
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Educational Programs</h2>
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={program.title} className="hover-lift">
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="order-2 lg:order-1">
                      <div className="h-64 lg:h-full bg-gradient-to-br from-primary/20 to-primary/40">
                        <img src={images[index]} alt={program.title} className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="order-1 lg:order-2 p-8">
                      <div className={`bg-gradient-to-r ${program.color} text-white rounded-xl p-6 mb-6`}>
                        <div className="flex items-center mb-4">
                          <program.icon className="h-12 w-12 mr-4" />
                          <div>
                            <h3 className="text-2xl font-bold">{program.title}</h3>
                            <p className="text-white/90">{program.age}</p>
                          </div>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {program.features.map((f) => (
                          <li key={f} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">CBC Curriculum Excellence</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-accent-green/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <GraduationCap className="h-16 w-16 text-primary/60 mx-auto mb-4" />
                  <p className="text-primary font-semibold">CBC Curriculum</p>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Competency-Based Curriculum (CBC)</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are fully committed to implementing the CBC curriculum, focusing on developing competencies that prepare learners for the 21st century.
                </p>
                <div className="space-y-3">
                  {["Learner-centered approach", "Continuous assessment and feedback", "Integration of technology", "Values-based education"].map((s) => (
                    <div key={s} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{s}</span>
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
