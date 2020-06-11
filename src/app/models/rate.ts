export interface CompactRate {
  id: number;
  base_amount: string;
  discounted_rate: number;
}

export interface Rate extends CompactRate {
  product_id: number;
  city_id: number;
}
