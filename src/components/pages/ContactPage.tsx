import Layout from "@/components/Layout";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "Phone Number", details: ["+254 110 380 560"], color: "bg-green-500" },
  { icon: Mail, title: "Email Address", details: ["marketingebenedictaacademy@gmail.com"], color: "bg-blue-500" },
  { icon: MapPin, title: "Location", details: ["Utawala, Nairobi", "Kenya"], color: "bg-red-500" },
  { icon: Clock, title: "Office Hours", details: ["Mon - Fri: 7:00 AM - 5:00 PM", "Sat: 8:00 AM - 1:00 PM"], color: "bg-purple-500" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name} - Embakasi Benedicta Academy`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:kimani7032@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Get in touch with us today. We're here to answer all your questions about our academy.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="hover-lift animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-card rounded-2xl p-6 text-center shadow-soft">
                  <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((d) => (
                      <p key={d} className="text-muted-foreground text-sm">{d}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    placeholder="Enter your email address" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background"
                    placeholder="Enter your phone number" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-background resize-none"
                    placeholder="Tell us how we can help you..." />
                </div>
                <button type="submit"
                  className="w-full bg-gradient-primary text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all hover:scale-105">
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Find Us</h2>
              <div className="bg-card rounded-2xl p-2 shadow-soft mb-8 h-64 overflow-hidden">
                <iframe
                  title="Embakasi Benedicta Academy map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.4818651623!2d36.9648738!3d-1.2786902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6ca7a692ff57%3A0x816b27946e67a493!2sEmbakasi%20Benedicta%20Academy!5e0!3m2!1sen!2ske!4v1721485273185!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.875rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-800">Quick WhatsApp Contact</h3>
                    <p className="text-green-600 text-sm">Get instant responses to your questions</p>
                  </div>
                </div>
                <a href="https://wa.me/+254110380560" target="_blank" rel="noopener noreferrer"
                  className="block w-full mt-4 bg-green-500 text-white py-3 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors">
                  Chat on WhatsApp
                </a>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="text-xl font-bold mb-4 text-foreground">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {["Quick response to all inquiries", "Free school tours available", "Flexible admission processes", "Parent consultation sessions"].map((s) => (
                    <li key={s} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                      <span className="text-muted-foreground">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Emergency Contact</h2>
          <p className="text-lg text-white/90 mb-6">For urgent matters outside office hours, please call our emergency line</p>
          <div className="flex items-center justify-center space-x-3">
            <Phone className="h-6 w-6" />
            <span className="text-xl font-bold">+254 110 380 560</span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
