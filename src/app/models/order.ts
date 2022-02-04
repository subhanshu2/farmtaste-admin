import { OrderStatus, OrderType, PaymentModes, PaymentStatus } from './enums';
import { CompactProduct } from './compact-product';
import { User } from './user';

export interface Order {
  id: number;
  order_id: number;
  user_id: number;
  cart_id: number;
  products: CompactProduct[];
  base_amount: number;
  amount: number;
  delivery_charge: number;
  discount?: number;
  delivery_address: string;
  employee_id?: number;
  coupon_code?: number;
  delivery_code?: string;
  payment_mode: PaymentModes;
  payment_status: PaymentStatus;
  order_status: OrderStatus;
  delivery_time: number;
  order_type: OrderType;
  expected_date?: Date;
  due_date?: Date;
  transaction_id?: string;
  transacted_at?: Date;
  invoice_url: string;
  user: User;
}

export interface Data {
  assignedOrders: Order[];
  unassignedOrders: Order[];
}
