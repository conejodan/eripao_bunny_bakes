export interface PastryItem {
  id: string;
  name: string;
  category: 'autor' | 'tartas' | 'especiales' | 'bocados';
  description: string;
  price: number;
  portions: string;
  imageUrl: string;
  isStar?: boolean;
  tags: string[];
  ingredients: string[];
  tastingNotes?: string;
}

export interface ScheduleDay {
  day: string;
  hours: string;
  openHour: number;
  closeHour: number;
  isClosed?: boolean;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  neighborhood: string;
  instagram: string;
}
