
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'mowing',
    name: 'Professional Lawn Mowing',
    description: 'Precision cutting, edging, and blowing for a manicured look. Perfect for Cleveland\'s summer growth spurts.',
    basePrice: 50,
    unit: '1000 sq ft',
    unitPrice: 10,
    image: 'https://picsum.photos/id/10/800/600',
    features: ['Precision Edging', 'Debris Cleanup', 'Blade Sharpening', 'Growth Monitoring']
  },
  {
    id: 'mulching',
    name: 'Mulch Installation',
    description: 'Premium hardwood or dyed mulch to protect your plants and retain moisture in Tennessee clay.',
    basePrice: 150,
    unit: 'Cubic Yard',
    unitPrice: 85,
    image: 'https://picsum.photos/id/11/800/600',
    features: ['Weed Barrier', 'Edge Trenching', 'Uniform Spread', 'Moisture Retention']
  },
  {
    id: 'patios',
    name: 'Paver Patios & Walkways',
    description: 'High-end stone and paver installations designed for longevity and local weather patterns.',
    basePrice: 1200,
    unit: 'sq ft',
    unitPrice: 22,
    image: 'https://picsum.photos/id/12/800/600',
    features: ['Base Excavation', 'Polymeric Sand', 'Professional Grade Pavers', 'Sealing Options']
  },
  {
    id: 'walls',
    name: 'Retaining Walls',
    description: 'Functional and aesthetic structural support for sloped Tennessee properties.',
    basePrice: 1500,
    unit: 'sq ft',
    unitPrice: 35,
    image: 'https://picsum.photos/id/13/800/600',
    features: ['Proper Drainage', 'Structural Engineering', 'Natural Stone or Block', 'Soil Retention']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "James Miller",
    location: "Cleveland, TN",
    text: "Ingram's completely transformed our backyard. The retaining wall is beautiful and stands up to our heavy spring rains.",
    stars: 5
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "Bradley County",
    text: "Most reliable lawn crew in town. They handle our red clay soil like pros and our grass has never looked better.",
    stars: 5
  },
  {
    id: 3,
    name: "Robert Thayer",
    location: "Hopewell",
    text: "The instant quote feature was dead-on. They showed up when they said they would and finished ahead of schedule.",
    stars: 5
  }
];

export const COMPANY_INFO = {
  name: "Ingram's Landscaping",
  phone: "(423) 555-0199",
  email: "office@ingramslandscaping.com",
  address: "123 Tennessee Way, Cleveland, TN 37311",
  hours: "Mon-Fri: 8AM - 6PM, Sat: By Appointment"
};
