import { Handshake, Building, Heart, Hospital, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

/* Animation configs */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Partnership = () => {
  const partnershipCategories = [
    {
      icon: Heart,
      title: "NGO Partnerships",
      description: "Collaborating with non-governmental organizations to amplify social impact",
      benefits: [
        "Volunteer coordination for emergency response",
        "Community outreach programs",
        "Social welfare initiatives",
        "Skill development programs",
        "Awareness campaigns for safety and civic responsibility"
      ],
      examples: [
        "Women safety organizations",
        "Child welfare NGOs",
        "Elderly care foundations",
        "Disaster relief organizations"
      ]
    },
    {
      icon: Building,
      title: "Insurance Sector",
      description: "Partnering with insurance companies to provide comprehensive coverage",
      benefits: [
        "Emergency response insurance coverage",
        "Health and safety premium discounts",
        "Quick claim processing through app integration",
        "Risk assessment based on safety data",
        "Family protection plans"
      ],
      examples: [
        "Life insurance companies",
        "Health insurance providers",
        "General insurance firms",
        "Micro-insurance organizations"
      ]
    },
    {
      icon: Building,
      title: "Government Collaboration",
      description: "Working with government bodies to strengthen public safety infrastructure",
      benefits: [
        "Integration with 112 emergency services",
        "Municipal complaint system integration",
        "Smart city initiative participation",
        "Public safety data sharing",
        "Digital governance support"
      ],
      examples: [
        "State police departments",
        "Municipal corporations",
        "Emergency services (112)",
        "Smart city missions"
      ]
    },
    {
      icon: Hospital,
      title: "Medical Sector",
      description: "Connecting with healthcare providers for immediate medical assistance",
      benefits: [
        "Direct hospital integration for emergencies",
        "Ambulance service partnerships",
        "Telemedicine consultations",
        "Health record management",
        "Preventive healthcare programs"
      ],
      examples: [
        "Multi-specialty hospitals",
        "Emergency medical services",
        "Diagnostic centers",
        "Pharmaceutical companies"
      ]
    },
    {
      icon: Leaf,
      title: "Swachh Bharat Initiative",
      description: "Supporting Clean India Mission through technology and community engagement",
      benefits: [
        "Waste management complaint system",
        "Environmental monitoring",
        "Community cleanliness drives",
        "Green initiative tracking",
        "Sustainable development goals"
      ],
      examples: [
        "Municipal waste management",
        "Environmental NGOs",
        "Green technology companies",
        "Sustainable development organizations"
      ]
    }
  ];

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
            <Handshake className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Partnership Opportunities
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Join hands with My Guardian to build a safer, smarter India. Together, we can create
              a comprehensive ecosystem that serves every citizen's safety and civic needs.
            </p>

            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a
                href="https://forms.gle/jD5K69BpBmkGqqCn7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Partner
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Partnership Categories
          </h2>

          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {partnershipCategories.map((category, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card
                  className="
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-[1.02]
                    hover:shadow-xl hover:shadow-primary/20
                  "
                >
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <category.icon className="w-12 h-12 text-primary" />
                      <div>
                        <CardTitle className="text-2xl">
                          {category.title}
                        </CardTitle>
                        <p className="text-muted-foreground mt-2">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Partnership Benefits
                        </h4>
                        <ul className="space-y-2">
                          {category.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <span className="text-secondary mt-1">•</span>
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Potential Partners
                        </h4>
                        <ul className="space-y-2">
                          {category.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm">
                              <span className="text-accent mt-1">•</span>
                              <span className="text-muted-foreground">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Partner With My Guardian?
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              {
                title: "Nationwide Reach",
                description: "Access to millions of users across urban and rural India",
                icon: "🌍"
              },
              {
                title: "Technology Leadership",
                description: "AI-powered platform with cutting-edge safety and civic solutions",
                icon: "🚀"
              },
              {
                title: "Social Impact",
                description: "Contribute to India's Smart Cities and Viksit Bharat 2047 vision",
                icon: "💫"
              },
              {
                title: "Data Insights",
                description: "Valuable analytics for better service delivery and planning",
                icon: "📊"
              },
              {
                title: "Brand Association",
                description: "Align with a trusted platform focused on citizen welfare",
                icon: "🤝"
              },
              {
                title: "Innovation Together",
                description: "Co-create solutions that address real-world challenges",
                icon: "💡"
              }
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card
                  className="
                    text-center
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:scale-[1.05]
                    hover:shadow-xl hover:shadow-primary/25
                  "
                >
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
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
            <h2 className="text-3xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              We're open to support, funding, and collaboration with individuals,
              investors, civic bodies, and institutions who share our vision.
            </p>

            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a
                href="mailto:myguardian2601@gmail.com?subject=Partnership%20Inquiry%20-%20My%20Guardian"
              >
                Contact Partnership Team
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
