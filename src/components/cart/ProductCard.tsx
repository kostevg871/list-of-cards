import Card from "antd/es/card/Card";
import { IProduct } from "../../interfaces/interface";
import { Button, Flex, Typography, Image } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  decrementQuantity,
  incrementQuantity,
  deleteCart,
} from "../../features/slice/cartSlice";
import { useAppDispatch } from "../../features/store";
const { Title, Paragraph, Text } = Typography;

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const decrementHandler = () => dispatch(decrementQuantity(product.id));
  const incrementHandler = () => dispatch(incrementQuantity(product.id));
  const deleteHandler = () => dispatch(deleteCart(product.id));

  return (
    <Card
      hoverable
      cover={<Image width={200} alt={product.title} src={product.thumbnail} />}
    >
      <Flex justify="space-between">
        <Flex vertical gap="middle" style={{ maxWidth: "500px" }}>
          <Title>{product.title}</Title>
          <Paragraph>{product.description}</Paragraph>
        </Flex>
        <Flex vertical gap="middle">
          <Text>Quantity: {product.quantity}</Text>
          <Text>Price: {product.price}</Text>
          <Flex gap="middle">
            <Button
              icon={<MinusOutlined />}
              type="primary"
              onClick={decrementHandler}
            />
            <Text>{product.quantity}</Text>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={incrementHandler}
            />
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={deleteHandler}
            />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductCard;
