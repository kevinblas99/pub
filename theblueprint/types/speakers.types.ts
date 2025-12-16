export interface Speaker {
  id: string;
  name: string;
  title: string;
  image: string;
}

export interface SpeakersResponse {
  speakers?: Speaker[];
  error?: string;
}

