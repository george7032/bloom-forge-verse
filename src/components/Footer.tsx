import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logoImage from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Kids Park", href: "/park" },
  { name: "Contact", href: "/contact" },
] as const;

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=100094652748920" },
  { name: "TikTok", icon: Youtube, href: "https://www.tiktok.com/@embakasi.benedict" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@benedictaschool" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img src={logoImage} alt="logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Embakasi Benedicta Academy</h3>
                <p className="text-sm text-white/80">A Nurturing Space for Young Minds!</p>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Providing quality education and fun learning experiences for children in a safe,
              nurturing environment with our exciting kids amusement park.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/80" />
                <span className="text-white/90 text-sm">+254 110 380 560</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/80" />
                <span className="text-white/90 text-sm">marketingebenedictaacademy@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-white/80 mt-1" />
                <span className="text-white/90 text-sm">Utawala, Nairobi<br />Kenya</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <p className="text-white/90 text-sm mb-4">Stay connected for updates and events</p>
            <div className="flex space-x-4">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors" aria-label={s.name}>
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-white/80 text-sm">© 2025 Embakasi Benedicta Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
