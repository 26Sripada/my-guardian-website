import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink, Twitter, Instagram, Youtube, Smartphone } from "lucide-react";
import logo from "/logo-modified.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
  <div className="flex items-center gap-3">
    <img
      src={logo}
      alt="My Guardian"
      className="h-9 w-9 object-contain"
    />
    <div className="flex flex-col leading-tight">
      <span className="text-sm font-extrabold tracking-widest uppercase text-slate-900">
        My Guardian
      </span>
    </div>
  </div>

  <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
    Building technology for citizen safety, Smart Governance, and India’s future
    from AI-powered platforms to smart city and safety infrastructure.
  </p>

            <div className="flex space-x-4">
              <a 
                href="https://x.com/MyGuardian2601?t=zsvH12bmIRHxKMy6TWgZrQ&s=09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/my_guardian_?igsh=MWlmMTllNjZxOWZpNg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://youtube.com/@myguardian-app?si=gNHfpvcg9nIBEvxB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition-colors"
                aria-label="Download from Play Store"
              >
                <Smartphone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                {/*{ name: "Product", href: "/product" },*/},
                { name: "Partnership", href: "/partnership" },
                { name: "Insights", href: "/insights" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>🚨 SOS Emergency Alerts</p>
              <p>🧹 Swachh Bharat</p>
              <p>📝 Complaints Submission</p>
              <p>🛍️ Local Business Support</p>
              <p>🏥 Healthcare Integration</p>
              <p>🤝 NGO Partnerships</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <a
  href="mailto:myguardian2601@gmail.com"
  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-blue-500 transition-colors"
  aria-label="Send email to My Guardian"
>
  <Mail size={16} />
  <span>myguardian2601@gmail.com</span>
</a>

              {/*<div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <span>+91 7483478198</span>
              </div>*/}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 My Guardian Technologies. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button
              variant="link"
              size="sm"
              className="text-muted-foreground hover:text-primary p-0 h-auto"
              asChild
            >
              <a href="https://26sripada.github.io/myguardian-privacy-policy/" target="_blank" rel="noopener noreferrer">
                Privacy Policy <ExternalLink size={14} className="ml-1" />
              </a>
            </Button>
            <Button
              variant="link"
              size="sm"
              className="text-muted-foreground hover:text-primary p-0 h-auto"
              asChild
            >
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;