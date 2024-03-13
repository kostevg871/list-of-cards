import Typography from "antd/es/typography/Typography";
import { useAppDispatch, useAppSelector } from "../features/store";
import { cartSelect } from "../features/slice/cartSelector";
import { useEffect } from "react";
import { countPrice } from "../features/slice/cartSlice";

const CartCost = () => {
  const cart = useAppSelector(cartSelect);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countPrice());
  }, [cart, dispatch]);

  return <Typography>{`Итого: ${cart.allProductsPrice} руб.`}</Typography>;
};

export default CartCost;
