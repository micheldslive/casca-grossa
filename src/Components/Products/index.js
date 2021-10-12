import React from "react";
import { ProductConsumer } from "Components/Context";
import Product from "./Card";

export default function Products({ view }) {
  return (
    <ProductConsumer>
      {(value) => {
        return value.products.map((product) => {
          return <Product key={product.id} product={product} view={view} />;
        });
      }}
    </ProductConsumer>
  );
}
