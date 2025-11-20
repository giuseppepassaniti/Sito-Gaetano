
export enum ServiceType {
  AIRPORT = 'Airport Transfer',
  TOUR = 'Island Tour',
  POINT_TO_POINT = 'Point to Point',
  HOURLY = 'Hourly Chauffeur'
}

export interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  serviceType: ServiceType;
  notes: string;
}

export interface StaticTour {
  id: string;
  title: string;
  island: 'Malta' | 'Gozo';
  duration: string;
  description: string;
  highlights: string[];
  priceEstimate: string;
}

export enum Island {
  MALTA = 'Malta',
  GOZO = 'Gozo'
}

export enum TourInterest {
  HISTORY = 'History',
  CULTURE = 'Culture',
  NATURE = 'Nature',
  GASTRONOMY = 'Gastronomy',
  SCENIC = 'Scenic Views'
}

export interface GeneratedItinerary {
  title: string;
  stops: {
    locationName: string;
    description: string;
    estimatedDuration: string;
  }[];
}