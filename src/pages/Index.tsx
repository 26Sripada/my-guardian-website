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
      description:
        "Instant SOS alerts with real-time location sharing to ensure quick help during emergencies."
    },
    {
      icon: Users,
      title: "Civic Engagement",
      description:
        "Report civic issues like garbage, roads, water supply, and contribute to Swachh Bharat."
    },
    {
      icon: Smartphone,
      title: "Local Commerce",
      description:
        "Discover nearby businesses, kirana stores, medical services, and trusted local providers."
    },
    {
      icon: Building,
      title: "Smart Cities",
      description:
        "Supporting India’s Smart Cities and Digital India initiatives through citizen participation."
    }
  ];

  const stats = [
    { icon: Heart, number: "1B+", label: "Citizens to Empower" },
    { icon: Building, number: "100+", label: "Cities Vision" },
    { icon: Users, number: "1M+", label: "Local Businesses" },
    { icon: TrendingUp, number: "24/7", label: "Safety Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ---------------- Hero ---------------- */}
      <Hero />

      {/* ---------------- SEO / AdSense Content Section ---------------- */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-6 text-foreground">
            My Guardian – A Citizen Safety & Civic Engagement Platform for India
          </h1>

          <p className="text-muted-foreground mb-4">
            My Guardian is a Made-in-India digital platform built to empower citizens by
            providing emergency safety tools, civic issue reporting, and access to local
            services in one unified ecosystem. The platform focuses on citizen safety,
            accountability, and community participation using modern digital technologies.
          </p>

          <p className="text-muted-foreground mb-4">
            As cities expand and daily life becomes more complex, citizens often face
            challenges such as delayed emergency response, unresolved civic complaints,
            lack of visibility into nearby services, and limited digital coordination.
            My Guardian addresses these problems by acting as a reliable digital companion
            for individuals, families, and communities.
          </p>

          <p className="text-muted-foreground mb-4">
            The platform actively supports national initiatives such as Swachh Bharat,
            Digital India, and the Smart Cities Mission by encouraging responsible civic
            participation. Citizens can report issues, stay informed, and engage with
            their surroundings in a meaningful and impactful way.
          </p>

          <p className="text-muted-foreground">
            Whether it is an emergency situation, a public infrastructure concern, or
            discovering trusted local services, My Guardian helps bridge the gap between
            people, technology, and governance to build a safer and smarter India.
          </p>
        </div>
      </section>

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
              My Guardian combines safety, civic responsibility, and local discovery into
              a single citizen-first digital platform.
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

      {/* ---------------- Detailed Use Cases ---------------- */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            How My Guardian Helps in Real-Life Situations
          </h2>

          <p className="text-muted-foreground mb-4">
            During emergencies, My Guardian allows users to quickly trigger SOS alerts
            with location sharing, helping loved ones or responders act faster. This
            feature is especially useful for women, senior citizens, and solo travelers.
          </p>

          <p className="text-muted-foreground mb-4">
            For civic engagement, users can report public issues such as road damage,
            garbage accumulation, water problems, or safety concerns. These reports help
            improve transparency and encourage quicker resolutions.
          </p>

          <p className="text-muted-foreground mb-4">
            The platform also strengthens local economies by enabling users to discover
            trusted nearby shops, healthcare services, and essential providers, promoting
            community-based growth and support.
          </p>

          <p className="text-muted-foreground">
            By integrating safety, civic responsibility, and local discovery, My Guardian
            creates a practical digital ecosystem that benefits individuals, communities,
            and cities across India.
          </p>
        </div>
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
              Our Vision for Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Building a safer, smarter, and more connected nation
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
            Be part of building a safer and smarter India and experience the future of citizen empowerment.
          </p>

          <motion.div {...hoverPump} className="inline-block">
            {/*<a
              href="https://forms.gle/BECZ8FJkV2bYZLZR7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Pre-Register Now
              </Button>
            </a>*/}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
