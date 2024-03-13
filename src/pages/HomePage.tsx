import { Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import Cart from "../components/Cart";
import CartCost from "../components/CartCost";

const HomePage = () => {
  return (
    <Row>
      <Col flex={3}>
        <Title style={{ display: "flex", justifyContent: "center" }}>
          Список продуктов
        </Title>
        <Cart />
      </Col>
      <Col
        flex={1}
        style={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        <Title>Корзина</Title>
        <CartCost />
      </Col>
    </Row>
  );
};

export default HomePage;
