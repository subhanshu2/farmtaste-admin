export enum PaymentModes {
  WALLET = 'wallet',
  COD    = 'cod',
  ONLINE = 'online'
}

export enum PaymentStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILURE = 'failure'
}

export enum OrderStatus {
  PENDING    = 'pending',
  ACCEPTED   = 'accepted',
  ON_THE_WAY = 'on the way',
  DELIVERED  = 'delivered',
  REJECTED   = 'rejected',
  CANCELLED  = 'cancelled'
}

export enum OrderType {
  CART         = 'cart',
  SUBSCRIPTION = 'subscription'
}
