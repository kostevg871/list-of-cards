import { List } from "antd";
import { useAppDispatch, useAppSelector } from "../../features/store";
import { cartSelect } from "../../features/slice/cartSelector";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { getProducts } from "../../features/services/cartApi";
import Title from "antd/es/typography/Title";

const ListCard = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector(cartSelect);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Title>Список продуктов</Title>
      <List
        style={{ maxWidth: 1000 }}
        dataSource={products}
        renderItem={(product) => <ProductCard product={product} />}
        loading={isLoading}
      />
    </>
  );
};

export default ListCard;
