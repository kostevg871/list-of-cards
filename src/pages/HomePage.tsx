import { Col, List, Row } from "antd";
import Title from "antd/es/typography/Title";
import { useAppDispatch, useAppSelector } from "../features/store";
import { cartSelect } from "../features/slice/cartSelector";
import { useEffect } from "react";
import { getCart } from "../features/services/cartApi";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartSelect);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <Row>
      <Col flex={3}>
        <Title>Список продуктов</Title>
        <List>
          {cart ? (
            cart.map((prod) => {
              return <Title key={prod.id}>{prod.title}</Title>;
            })
          ) : (
            <></>
          )}
        </List>
      </Col>
      <Col flex={1}>
        <Title>Корзина</Title>
      </Col>
    </Row>
  );
};

export default HomePage;
