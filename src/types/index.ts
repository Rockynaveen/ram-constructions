export type ProjectCategory = 'All' | 'Residential' | 'Commercial' | 'Architecture' | 'Interior' | 'Renovation';

export interface GalleryItem {
  url: string;
  caption: string;
  aspectRatio?: 'wide' | 'tall' | 'square';
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Residential' | 'Commercial' | 'Architecture' | 'Interior' | 'Renovation';
  location: string;
  year: string;
  area: string; // e.g. "8,400 sq.ft"
  duration: string; // e.g. "14 Months"
  budgetRange: string; // e.g. "₹3.8 Cr - ₹4.5 Cr"
  coverImage: string;
  heroImage: string;
  gallery: GalleryItem[];
  overview: string;
  architecturalConcept: string;
  spatialFeatures: string[];
  materials: {
    name: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
  clientTestimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface Service {
  id: string;
  slug: string;
  number: string; // "01", "02", etc.
  title: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  deliverables: string[];
  workflow: {
    phase: string;
    title: string;
    details: string;
  }[];
  engineeringStandards: string[];
  iconName: string;
  featuredProjectsCount: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Architecture' | 'Construction' | 'Interiors' | 'Planning' | 'Materials' | 'Cost & Budget';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  excerpt: string;
  sections: {
    heading?: string;
    paragraphs: string[];
    calloutQuote?: string;
    keyTakeaways?: string[];
  }[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  location: string;
  projectTitle: string;
  area: string;
  year: string;
  image: string;
  quote: string;
  rating: number;
}

export interface FAQ {
  id: string;
  category: 'General' | 'Cost & Contracts' | 'Architecture & Approvals' | 'Execution & Quality';
  question: string;
  answer: string;
}

export interface MaterialSpec {
  id: string;
  name: string;
  category: string;
  origin: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ProjectEnquiryInput {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  projectType: 'Residential Villa' | 'Commercial Space' | 'Architectural Design Only' | 'Luxury Interior' | 'Turnkey Renovation';
  plotArea: string;
  estimatedBudget: string;
  preferredStartDate: string;
  plotStatus: 'Ready for Construction' | 'Plot Purchased / In Progress' | 'Searching for Land' | 'Existing Structure to Demolish';
  message: string;
}
