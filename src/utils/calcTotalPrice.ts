import { IProduct } from "../interfaces/interface";

export const calcTotalPrice = (items: IProduct[]) => {
  return items.reduce((sum, obj) => obj.price * obj.quantity + sum, 0);
};
