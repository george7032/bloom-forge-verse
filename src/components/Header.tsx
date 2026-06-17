import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Facebook, Youtube, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Amusement Park", href: "/park" },
  { name: "Contact", href: "/contact" },
] as const;

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=100094652748920" },
  { name: "TikTok", icon: Youtube, href: "https://www.tiktok.com/@embakasi.benedict" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@benedictaschool" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+254 110 380 560</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="text-sm">marketingebenedictaacademy@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={s.name}>
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden">
              <img src={logoImage} alt="Embakasi Benedicta Academy logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Embakasi Benedicta Academy</h1>
              <p className="text-sm text-muted-foreground">A Nurturing Space for Young Minds!</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className={`nav-link ${isActive(item.href) ? "text-primary" : ""}`}>
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link block py-2 ${isActive(item.href) ? "text-primary" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t border-border">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={s.name}>
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
