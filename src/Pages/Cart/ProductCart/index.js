import React from "react";
import Product from "./Product";

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <>
      {cart.map((item) => {
        return <Product key={item.produtoid} item={item} value={value} />;
      })}
    </>
  );
}
