import { Shield, Phone, MapPin, AlertTriangle, Camera, Store, Heart, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Product = () => {
  const currentFeatures = [
    {
      icon: Shield,
      title: "SOS Emergency Assistance",
      description: "Double-tap SOS alert with real-time live location sharing",
      details: [
        "Alert sent to registered emergency contacts instantly",
        "Planned integration with 112 Helpline, police, ambulance, and fire services"
      ],
      status: "active"
    },
    {
      icon: Camera,
      title: "Swachh Bharat & Civic Complaint System",
      description: "Anonymous complaint submission with photo/video proof",
      details: [
        "GPS-tagged complaints routed to relevant municipal authorities",
        "Protects complainant identity to encourage civic participation",
        "Supports Swachh Bharat Mission and public cleanliness drives"
      ],
      status: "active"
    },
    {
      icon: Store,
      title: "Local Shop & Service Listings",
      description: "Listings for local kirana stores, service providers, tailors, etc.",
      details: [
        "Helps small businesses gain visibility in their neighborhoods",
        "Encourages hyperlocal economic activity",
        "Community ratings and reviews for reliability"
      ],
      status: "active"
    }
  ];

  const upcomingFeatures = [
    {
      icon: Store,
      title: "E-commerce Marketplace",
      description: "Exclusively for Made in India products",
      details: [
        "Empowering MSMEs, artisans, and small-scale manufacturers",
        "Planned last-mile delivery partnership with India Post",
        "Supporting Make in India initiative"
      ]
    },
    {
      icon: Heart,
      title: "Healthcare Integration",
      description: "Hospital and ambulance integration for immediate response",
      details: [
        "Direct connection with nearby hospitals",
        "Ambulance booking and tracking",
        "Health records and emergency medical information"
      ]
    },
    {
      icon: Zap,
      title: "Volunteer Coordination",
      description: "Coordinate volunteers for emergencies and civic events",
      details: [
        "Community volunteer network",
        "Event organization and participation",
        "NGO collaboration platform"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              App Now Available
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Guardian App</h1>
            <p className="text-xl text-white/90 mb-8">
              Your go-to SuperApp for safety, civic engagement, and local commerce. 
              A unified digital platform built for India's Smart Cities vision.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Download Now
            </Button>
          </div>
        </div>
      </section>

      {/* App Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">About the App</h2>
            <p className="text-lg text-muted-foreground">
              My Guardian is a citizen-first mobile application built to deliver real-time safety alerts, 
              civic complaint redressal, and promote local commerce—all in one place. The app empowers 
              users with emergency SOS features, live location sharing, local services discovery, 
              and community-driven tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Platform</h3>
                <p className="text-sm text-muted-foreground">Flutter (Android)</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground">Firebase</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-10 h-10 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Coverage</h3>
                <p className="text-sm text-muted-foreground">Pan-India</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Focus</h3>
                <p className="text-sm text-muted-foreground">Citizen Safety</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Current Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-primary mb-2" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="text-secondary mt-1">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Upcoming Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-dashed">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-secondary mb-2" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <Badge variant="outline" className="w-fit">Coming Soon</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-destructive text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Problem Statement & Our Solution</h2>
            <p className="text-lg text-white/90 mb-8">
              India's citizens often face delayed emergency response, poor civic complaint resolution, 
              and lack of visibility for local services. My Guardian bridges this gap by offering an 
              all-in-one digital platform for safety, services, and civic engagement.
            </p>
            <p className="text-xl font-semibold">
              Whether it's a fire emergency, local service need, or a Swachh Bharat complaint—our app 
              puts the power in the hands of the people.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make India Safer?</h2>
            <p className="text-lg text-white/90 mb-8">
              Join the movement towards a safer, smarter, and more connected India. 
              Be among the first to experience the My Guardian app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Download from Play Store
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary">
                Get Updates
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;