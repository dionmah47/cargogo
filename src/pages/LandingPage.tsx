import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, MapPin, Clock, Star, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';

function LandingPage() {
  const features = [
    {
      icon: Truck,
      title: 'Easy Transport',
      description: 'Connect with reliable drivers in your area for quick cargo transportation.',
    },
    {
      icon: MapPin,
      title: 'Real-time Tracking',
      description: 'Track your cargo from pickup to delivery with live GPS updates.',
    },
    {
      icon: Clock,
      title: 'Fast Booking',
      description: 'Book a transport in minutes. No waiting, no hassle.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Create Request',
      description: 'Tell us what you need to transport and where.',
    },
    {
      number: '2',
      title: 'Browse Drivers',
      description: 'See available drivers with verified ratings.',
    },
    {
      number: '3',
      title: 'Complete Transport',
      description: 'Track your cargo and make secure payment.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Business Owner',
      content: 'CargoGo saved us thousands on logistics. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Mike Chen',
      role: 'Freelance Driver',
      content: 'Amazing platform to earn extra income. Easy to use and fast payouts.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      role: 'Startup Founder',
      content: 'The best cargo transportation platform I\'ve used. Great support!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="container-max py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight">
              Find Transport for<br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                Anything
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Connect with local drivers for reliable cargo transportation. Fast, secure, and affordable.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/signup?role=customer">
              <Button size="lg" className="group">
                Request Transport
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/signup?role=driver">
              <Button variant="outline" size="lg" className="group">
                Become a Driver
                <Truck className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container-max py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">Why Choose CargoGo?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The most reliable and affordable cargo transportation platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} hoverable className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container-max py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">How It Works</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Three simple steps to get your cargo transported.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-500 text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-max py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            See what our users have to say about CargoGo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4 italic\">\"\"\" {testimonial.content}\"\"\"</p>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50">{testimonial.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-max py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who trust CargoGo for their transportation needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/signup?role=customer">
              <Button className="bg-white text-primary-600 hover:bg-slate-100">
                Start as Customer
              </Button>
            </Link>
            <Link to="/signup?role=driver">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Start as Driver
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
