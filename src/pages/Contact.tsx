import { Mail, Phone, Send, MessageSquare, Clock, Twitter, Instagram, Youtube, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase"; // your firebase.ts


const Contact = () => {
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;

  try {
    await addDoc(collection(db, "contact_website"), {
      firstName: (form.firstName as HTMLInputElement).value,
      lastName: (form.lastName as HTMLInputElement).value,
      email: (form.email as HTMLInputElement).value,
      phone: (form.phone as HTMLInputElement).value,
      subject: (form.subject as HTMLInputElement).value,
      category: (form.category as HTMLSelectElement).value,
      message: (form.message as HTMLTextAreaElement).value,
      createdAt: serverTimestamp(),
      source: "website",
    });

    alert("Message sent successfully!");
    form.reset(); // ✅ reset works
  } catch (error) {
    console.error(error);
    alert("Failed to send message. Try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <MessageSquare className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 mb-8">
              Ready to be part of India's safety revolution? We'd love to hear from you. 
              Whether you're interested in partnerships, have questions, or want to share feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll get back to you shortly
                </p>
                <a
  href="mailto:myguardian2601@gmail.com"
  className="text-sm font-medium text-primary hover:underline"
>
  myguardian2601@gmail.com
</a>

              </CardContent>
            </Card>

            {/*<Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
                <p className="text-muted-foreground mb-4">
                  Call us during business hours for immediate assistance
                </p>
                <p className="text-sm font-medium text-primary">
                  +91 7483478198
                </p>
              </CardContent>
            </Card>*/}

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center space-x-4 mb-4">
                  <Twitter className="w-8 h-8 text-accent" />
                  <Instagram className="w-8 h-8 text-accent" />
                  <Youtube className="w-8 h-8 text-accent" />
                  <Smartphone className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Social Media</h3>
                <p className="text-muted-foreground mb-4">
                  Follow us for the latest updates and community discussions
                </p>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://x.com/MyGuardian2601?t=zsvH12bmIRHxKMy6TWgZrQ&s=09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                  >
                    <Twitter size={20} />
                    <span>Twitter</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/my_guardian_?igsh=MWlmMTllNjZxOWZpNg==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://youtube.com/@myguardian-app?si=gNHfpvcg9nIBEvxB" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                  >
                    <Youtube size={20} />
                    <span>YouTube</span>
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.angel.guardian_angel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                  >
                    <Smartphone size={20} />
                    <span>Play Store</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Have a question, suggestion, or want to explore partnership opportunities? 
                Fill out the form below and we'll get back to you.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-6 h-6 text-primary" />
                  <span>Contact Form</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select 
                      id="category" 
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="support">Technical Support</option>
                      <option value="media">Media Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="gradient-primary flex-1">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <Button type="reset" variant="outline" className="flex-1">
  Reset Form
</Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    * Required fields. We'll get back to you within 24-48 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-primary" />
                    <span>Response Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">General Inquiries:</span>
                      <span className="font-medium">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Partnership Inquiries:</span>
                      <span className="font-medium">2-3 business days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Technical Support:</span>
                      <span className="font-medium">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Media Inquiries:</span>
                      <span className="font-medium">Same day</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-6 h-6 text-secondary" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Operating Hours:</strong><br />
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday: Closed<br />
                      Sunday: Closed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Build a Safer India Together</h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you're an individual, organization, or government body interested in making 
              India safer and smarter, we'd love to connect and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule a Meeting
              </Button>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;