import { Shield, Smartphone, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";


const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner}
          alt="My Guardian Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building a Safer, <br />
              <span className="text-accent">Smarter India</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl">
              My Guardian is a citizen-first SuperApp empowering every Indian with 
              AI-powered safety, civic engagement, and local commerce solutions.
            </p>
          </div>
          
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 mb-12">
            {/*<Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              Download App
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary">
              Learn More
            </Button>*/}
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
            {[
              { icon: Shield, title: "SOS Emergency", desc: "Instant alerts" },
              { icon: Users, title: "Civic Engagement", desc: "Complaints Submission" },
              { icon: Smartphone, title: "Local Commerce", desc: "Support MSMEs" },
              { icon: Zap, title: "Smart Cities", desc: "Digital backbone" }
            ].map((feature, index) => (
              <div key={index} className="text-center text-white">
                <feature.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                <h3 className="font-semibold text-sm">{feature.title}</h3>
                <p className="text-xs text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;