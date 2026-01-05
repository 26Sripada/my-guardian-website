import {
  BookOpen,
  Mail,
  Bell,
  Calendar,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

/* Motion configs */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const Insights = () => {
  const blogPosts = [
    {
      title: "Building India's Digital Safety Infrastructure",
      excerpt:
        "How My Guardian is contributing to the Smart Cities mission and Viksit Bharat 2047 vision through citizen-first technology solutions.",
      date: "Coming Soon",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Women's Safety in the Digital Age",
      excerpt:
        "Exploring how technology can empower women with real-time safety tools and community support systems.",
      date: "Coming Soon",
      category: "Safety",
      readTime: "7 min read"
    },
    {
      title: "Civic Engagement Through Mobile Apps",
      excerpt:
        "The role of citizen-first applications in strengthening democracy and improving governance at the grassroots level.",
      date: "Coming Soon",
      category: "Civic Tech",
      readTime: "6 min read"
    },
    {
      title: "Supporting Local Businesses with Technology",
      excerpt:
        "How digital platforms can bridge the gap between local service providers and their communities.",
      date: "Coming Soon",
      category: "Economy",
      readTime: "4 min read"
    }
  ];

  const newsletterTopics = [
    "Product development updates and new feature announcements",
    "Success stories from My Guardian users across India",
    "Partnership highlights and collaboration updates",
    "Technology insights and safety tips for citizens",
    "Government initiatives and policy updates affecting citizen safety",
    "Community events and civic engagement opportunities"
  ];

  const updateCategories = [
    {
      icon: TrendingUp,
      title: "Product Updates",
      description: "Latest features, improvements, and roadmap announcements",
      updates: [
        "App development milestones",
        "New feature releases",
        "Performance improvements",
        "User feedback implementations"
      ]
    },
    {
      icon: Bell,
      title: "News & Announcements",
      description: "Important company news and partnership announcements",
      updates: [
        "Partnership announcements",
        "Funding updates",
        "Team expansions",
        "Award recognitions"
      ]
    },
    {
      icon: Calendar,
      title: "Events & Webinars",
      description: "Upcoming events, demonstrations, and educational content",
      updates: [
        "Product demonstrations",
        "Safety awareness webinars",
        "Community meetups",
        "Conference participations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Insights & Updates
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Stay informed with the latest developments, insights, and updates
              from My Guardian. Discover how we're building a safer, smarter
              India together.
            </p>

            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <a
                href="https://forms.gle/PqCq457P8JqJxFd18"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe to Updates
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Blog</h2>
              <p className="text-muted-foreground">
                Insights on technology, safety, and civic engagement
              </p>
            </div>
            <BookOpen className="w-12 h-12 text-primary" />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card
                  className="
                    transition-all duration-300
                    hover:-translate-y-2 hover:scale-[1.03]
                    hover:shadow-xl hover:shadow-primary/20
                  "
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {post.date}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary-dark"
                      >
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Newsletter</h2>
                <p className="text-muted-foreground">
                  Regular updates delivered to your inbox
                </p>
              </div>
              <Mail className="w-12 h-12 text-secondary" />
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What You'll Receive</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {newsletterTopics.map((topic, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-secondary mt-1">•</span>
                      <span className="text-muted-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              className="
                gradient-primary text-white
                transition-all duration-300
                hover:-translate-y-2 hover:scale-[1.02]
                hover:shadow-xl
              "
            >
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-white/90 mb-6">
                  Be the first to know about product updates, partnership
                  announcements, and insights from the My Guardian team.
                </p>

                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <a
                    href="https://forms.gle/PqCq457P8JqJxFd18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Subscribe Now
                  </a>
                </Button>

                <p className="text-sm text-white/70 mt-4">
                  Coming soon! Newsletter signup will be available shortly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Updates */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Updates</h2>
              <p className="text-muted-foreground">
                Stay current with the latest developments
              </p>
            </div>
            <Bell className="w-12 h-12 text-accent" />
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {updateCategories.map((category, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card
                  className="
                    transition-all duration-300
                    hover:-translate-y-2 hover:scale-[1.03]
                    hover:shadow-xl hover:shadow-primary/20
                  "
                >
                  <CardHeader>
                    <category.icon className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>{category.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.updates.map((update, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-sm"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">
                            {update}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
            <p className="text-lg text-white/90 mb-8">
              Don't miss out on important updates about My Guardian's journey.
              Subscribe and be part of the conversation.
            </p>

            <a
              href="https://www.instagram.com/my_guardian_?igsh=MWlmMTllNjZxOWZpNg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white hover:text-primary"
              >
                Follow Our Journey
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
