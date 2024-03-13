import { List, Card, Button, Typography, Row, Col } from "antd";
import { useAppDispatch, useAppSelector } from "../features/store";
import { cartSelect } from "../features/slice/cartSelector";
import { useEffect } from "react";
import { getCart } from "../features/services/cartApi";
import {
  deleteCart,
  decrementQuantity,
  incrementQuantity,
} from "../features/slice/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartSelect);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <List style={{ display: "flex", justifyContent: "center" }}>
      {!cart.isLoading ? (
        cart.cart.products.map((prod) => {
          return (
            <Card
              hoverable
              key={prod.id}
              bordered={true}
              style={{
                width: "100%",
                marginTop: 16,
              }}
              loading={cart.isLoading}
              cover={<img alt={prod.title} src={prod.thumbnail}></img>}
            >
              <Row>
                <Col flex={2}>
                  <Typography>{prod.title}</Typography>
                  <Typography>"пока нету"</Typography>
                </Col>
                <Col>
                  <Typography>Quantity: {prod.quantity}</Typography>
                  <Typography>Price: {prod.price}</Typography>
                  <Row>
                    <Button
                      onClick={() => dispatch(decrementQuantity(prod.id))}
                    >
                      -
                    </Button>
                    <Typography>{prod.quantity}</Typography>
                    <Button
                      onClick={() => dispatch(incrementQuantity(prod.id))}
                    >
                      +
                    </Button>
                    <Button onClick={() => dispatch(deleteCart(prod.id))}>
                      delete
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card>
          );
        })
      ) : (
        <></>
      )}
    </List>
  );
};

export default Cart;
