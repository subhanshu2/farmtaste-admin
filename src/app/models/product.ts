/*
  Author: Subhanshu Chaddha
  Contact: subhanshu.chaddha2@gmail.com
  College: AKGEC, Ghaziabad
*/
import { CompactRate } from './rate';

export interface Product {
  id: number;
  title: string;
  sub_category_id: string;
  image_url: string;
  is_under_gst: string;
  base_quantity: string;
  gst_rate: string;
  is_active: number;
  mrp: number;
  selling_price: number;
  city_id: number;
}
