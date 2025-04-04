export interface Supplier {
  id: number;
  name: string;
  supplyList: string;
  description: string;
  imageUrl: string;
  created_at: string;
}

export interface ListSuppliersProps {
  data: Supplier[] | null; // TODO type well xD
}

export type Supply = 'barbershop' | 'haircut' | 'manicure' | 'pedicure' | 'makeup' | 'massage' | 'facial';