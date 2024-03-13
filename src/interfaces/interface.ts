export interface IProducts {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}

export interface ISingleCart {
  id: number;
  products: IProducts[];
  total: number;
  discountedTotal?: number;
  userId?: number;
  totalProducts?: number;
  totalQuantity?: number;
}
