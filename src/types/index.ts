export interface Cause {
  id: string;
  title: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  image: string;
  category: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  city?: string;
  postalCode?: string;
}

export type DonationFrequency = 'one-time' | 'recurring';

export interface DonationState {
  frequency: DonationFrequency;
  amount: number;
  isCustomAmount: boolean;
}

export interface NavItem {
  label: string;
  path: string;
}

// New Interfaces for Expansion
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // We'll map this to Lucide icons
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
