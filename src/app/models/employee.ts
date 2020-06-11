/*
  Author: Subhanshu Chaddha
  Contact: subhanshu.chaddha2@gmail.com
  College: AKGEC, Ghaziabad
*/
export interface Employee {
  id: number;
  name: string;
  email: string;
  mobile_no: string;
  aadhaar_no: string;
  driver_license: string;
  category_id: number;
  state: string;
  city: string;
  location: string;
  area: string;
  pincode: string;
  createdBy: number;
}

export interface EmployeeCategory {
  id: number;
  title: number;
}
