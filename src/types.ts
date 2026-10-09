export type TicketCategory = 'day-pass' | 'family-pass' | 'premium-pass';

export interface Attraction {
  id: string;
  name: string;
  category: 'thrill' | 'family' | 'pool' | 'kids';
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  thrillLevel: 'Mild' | 'Moderate' | 'High' | 'Extreme';
  minHeight: string;
  speed: string;
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
  audience: string;
}

export interface TicketOption {
  id: TicketCategory;
  name: string;
  badge?: string;
  price: number;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
}

export interface DiningVenue {
  id: string;
  name: string;
  category: string;
  description: string;
  hours: string;
  image: string;
  popularItems: { name: string; price: string; description: string; tag?: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'slides' | 'pools' | 'family' | 'dining';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  visitorType: string;
  avatarText: string;
  rating: number;
  date: string;
  comment: string;
}

export interface BookingState {
  date: string;
  ticketType: TicketCategory;
  adults: number;
  children: number;
  lockers: number;
  fastTrack: boolean;
  mealPasses: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}
