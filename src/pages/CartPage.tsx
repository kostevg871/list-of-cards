import { Layout } from "antd";
import CartCost from "../components/cost/CartCost";
import ListCard from "../components/cart/ListCard";

const ProductsPage = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Content style={{ padding: "16px" }}>
        <ListCard />
      </Layout.Content>
      <Layout.Sider
        width="33%"
        style={{ backgroundColor: "white", padding: "16px" }}
      >
        <CartCost />
      </Layout.Sider>
    </Layout>
  );
};

export default ProductsPage;
