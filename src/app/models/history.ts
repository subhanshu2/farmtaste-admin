import { OrderStatus, OrderType, PaymentModes, PaymentStatus } from './enums';
import { CompactProduct } from './compact-product';
import { User } from './user';

export interface History {
  id: number;
  order_id: number;
  user_id: number;
  products: CompactProduct[];
  base_amount: number;
  amount: number;
  delivery_charge: number;
  discount?: number;
  delivery_address: string;
  employee_id?: number;
  payment_mode: PaymentModes;
  payment_status: PaymentStatus;
  order_status: OrderStatus;
  order_type: OrderType;
  delivery_date?: Date;
  transaction_id?: string;
  transacted_at?: Date;
  invoice_no?: number;
  user: User;
}
