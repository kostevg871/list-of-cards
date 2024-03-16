import { useAppSelector } from "../../features/store";
import { cartCostSelect } from "../../features/slice/cartSelector";
import { Affix, Typography } from "antd";

const CartCost = () => {
  const cartCost = useAppSelector(cartCostSelect);

  return (
    <Affix>
      <Typography.Title>Корзина</Typography.Title>
      <Typography>{`Итого: ${cartCost} руб.`}</Typography>
    </Affix>
  );
};

export default CartCost;
