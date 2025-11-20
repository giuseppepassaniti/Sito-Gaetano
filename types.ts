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

export interface TourStop {
  locationName: string;
  description: string;
  estimatedDuration: string;
}

export interface GeneratedItinerary {
  title: string;
  stops: TourStop[];
}

export enum Island {
  MALTA = 'Malta',
  GOZO = 'Gozo'
}

export enum TourInterest {
  HISTORY = 'History & Culture',
  BEACHES = 'Beaches & Relaxation',
  FOOD = 'Food & Wine',
  SCENIC = 'Scenic Views & Nature'
}