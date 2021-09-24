import React from "react";
import Product from "./Product";

export default function CartList({ value }) {
  const { cart } = value;
  return (
    <>
      {cart.map((item) => {
        return <Product key={item.id} item={item} value={value} />;
      })}
    </>
  );
}
