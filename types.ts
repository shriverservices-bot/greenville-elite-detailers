
export interface Service {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface AnalysisResult {
  condition: string;
  recommendation: string;
  urgency: 'low' | 'medium' | 'high';
  suggestedPackage: string;
}
