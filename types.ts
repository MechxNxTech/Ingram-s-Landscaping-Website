
export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  unit: string;
  unitPrice: number;
  image: string;
  features: string[];
}

export interface QuoteFormData {
  yardSize: number;
  services: string[];
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface QuoteResult {
  total: number;
  items: { name: string; cost: number }[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  location: string;
  stars: number;
}
