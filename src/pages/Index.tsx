import Hero from "@/components/Hero";
import { Shield, Users, Smartphone, Building, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

/* ---------------- animations ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const hoverPump = {
  whileHover: {
    scale: 1.06,
    transition: { stiffness: 300 }
  }
};


const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Emergency SOS",
      description: "Double-tap emergency alerts with real-time location sharing to keep you and your loved ones safe."
    },
    {
      icon: Users,
      title: "Civic Engagement",
      description: "Complaint Submission system for civic issues, supporting Swachh Bharat and community development."
    },
    {
      icon: Smartphone,
      title: "Local Commerce",
      description: "Discover and support local businesses, kirana stores, and service providers in your neighborhood."
    },
    {
      icon: Building,
      title: "Smart Cities",
      description: "Contributing to India's Smart Cities vision with integrated digital governance solutions."
    }
  ];

  const stats = [
    { icon: Heart, number: "1B+", label: "Lives to Impact" },
    { icon: Building, number: "100+", label: "Cities to Cover" },
    { icon: Users, number: "1M+", label: "Local Businesses" },
    { icon: TrendingUp, number: "24/7", label: "Emergency Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* ---------------- Features Section ---------------- */}
      <section className="py-16">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Empowering Every Citizen
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My Guardian combines cutting-edge technology with citizen-first design to create
              a comprehensive safety and civic engagement platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...hoverPump}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---------------- Stats Section ---------------- */}
      <section className="py-16 bg-muted">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Impact Vision
            </h2>
            <p className="text-lg text-muted-foreground">
              Building towards a safer, smarter, and more connected India
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...hoverPump}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---------------- CTA Section ---------------- */}
      <section className="py-16 gradient-hero text-white">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join the Movement?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of building a safer, smarter India. Download My Guardian when it launches
            and experience the future of citizen empowerment.
          </p>

          <motion.div {...hoverPump} className="inline-block">
            <a
              href="https://forms.gle/BECZ8FJkV2bYZLZR7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Pre-Register Now
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
