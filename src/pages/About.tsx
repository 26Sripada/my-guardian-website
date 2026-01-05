import { Target, Eye, Heart, Users, Shield, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-white/90">
              Technology should serve humanity, not just convenience.
              <br />
              My Guardian is building the future of citizen safety and governance in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-lg leading-relaxed mb-6">
                In a world where personal safety, community growth, and sustainability are critical, 
                <strong className="text-foreground"> My Guardian</strong> was born out of a simple yet powerful belief: 
                "Technology should serve humanity, not just convenience."
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Founded by two visionary engineers from a region with limited tech access, My Guardian 
                started with the mission of safeguarding women, children, and elders through an affordable, 
                intelligent wearable device and an intuitive mobile app.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                But what started as a safety product quickly evolved into a transformative idea - a 
                <strong className="text-foreground"> SuperApp built for India</strong>, addressing urgent needs: 
                emergency response, local business empowerment, sustainable environment, and accessible healthcare.
              </p>
              <p className="text-lg leading-relaxed">
                Now, My Guardian is on a path to become the 
                <strong className="text-primary"> Digital Backbone of India's Smart Cities</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Goals */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                icon: Target,
                title: "Mission",
                text:
                  "To build a safer, smarter India through AI-powered technology that empowers every citizen.",
                color: "text-primary",
              },
              {
                icon: Eye,
                title: "Vision",
                text:
                  "To become the technology backbone of India’s Smart Cities and digital governance ecosystem.",
                color: "text-secondary",
              },
              {
                icon: Lightbulb,
                title: "Goals",
                text:
                  "To support Viksit Bharat 2047 by delivering scalable, citizen-first solutions nationwide.",
                color: "text-accent",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className="
                    group text-center
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-[1.03]
                    hover:shadow-xl hover:shadow-primary/20
                  "
                >
                  <CardContent className="p-8">
                    <item.icon
                      className={`w-12 h-12 mx-auto mb-4 ${item.color}
                      transition-transform duration-300 group-hover:scale-110`}
                    />
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { icon: Shield, title: "Safety First", desc: "Protecting lives through technology" },
              { icon: Users, title: "Inclusivity", desc: "Built for every Indian citizen" },
              { icon: Heart, title: "Sustainability", desc: "Encouraging responsible living" },
              { icon: Lightbulb, title: "Innovation", desc: "Ethical AI and smart systems" },
              { icon: Users, title: "Community", desc: "Empowering MSMEs & local governance" },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
              >
                <Card
                  className="
                    group text-center
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-[1.05]
                    hover:shadow-xl hover:shadow-primary/25
                  "
                >
                  <CardContent className="p-6">
                    <value.icon
                      className="
                        w-10 h-10 text-primary mx-auto mb-3
                        transition-transform duration-300
                        group-hover:scale-110 group-hover:rotate-3
                      "
                    />
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Vision 2030</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <p>• Safety wearables in every Indian household</p>
                <p>• Digitally empowered towns and villages</p>
                <p>• Clean, green, and safe living platforms</p>
              </div>
              <div className="space-y-3">
                <p>• Strong government & NGO collaborations</p>
                <p>• Full-stack Smart City framework</p>
                <p>• Active contribution to Viksit Bharat 2047</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
