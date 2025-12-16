// types/event.ts

export interface EventDetails {
  id: string;
  description: string;
}

export interface PastEvent {
  id: string;
  title: string;
  image: string;
  rotation?: number; // Optional rotation angle for tilted effect
}

export interface EventDetailsResponse {
  eventDetails?: EventDetails;
  error?: string;
}

export interface PastEventsResponse {
  pastEvents?: PastEvent[];
  error?: string;
}