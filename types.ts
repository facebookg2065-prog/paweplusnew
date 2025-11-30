export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  price: number;
  imageUrl: string;
  rating: number;
  category: string;
}

export enum PaymentMethod {
  CRYPTO = 'Crypto',
  ETH = 'ETH',
  PAYPAL = 'PayPal',
  PAYEER = 'Payeer'
}