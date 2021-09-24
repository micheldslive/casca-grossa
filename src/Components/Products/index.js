import React from "react";
import { ProductConsumer } from "../Context";
import Product from "./Card";

export default function Products() {
  return (
    <ProductConsumer>
      {(value) => {
        return value.products.map((product) => {
          return <Product key={product.id} product={product} />;
        });
      }}
    </ProductConsumer>
  );
}
