export interface IProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description?: string;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}

export interface ISingleCart {
  id: number;
  products: IProduct[];
  total: number;
  discountedTotal?: number;
  userId?: number;
  totalProducts?: number;
  totalQuantity?: number;
}

export interface IProductInfo {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
