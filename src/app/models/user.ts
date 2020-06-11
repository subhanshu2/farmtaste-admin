/*
  Author: Subhanshu Chaddha
  Contact: subhanshu.chaddha2@gmail.com
  College: AKGEC, Ghaziabad
*/
export interface User {
  id: number;
  name: string;
  email: string;
  mobile_no: string;
  alternate_no: string;
  wallet: number;
  city_id: number;
  location_id: number;
  area_id: number;
  pincode: string;
  address: string;
  landmark: string;
  state: string;
  referral_code: string;
  referred_by: number;
}
