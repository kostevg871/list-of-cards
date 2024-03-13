import { IProducts } from "../interfaces/interface";

export const calcTotalPrice = (items: IProducts[]) => {
  return items.reduce((sum, obj) => obj.price * obj.quantity + sum, 0);
};
