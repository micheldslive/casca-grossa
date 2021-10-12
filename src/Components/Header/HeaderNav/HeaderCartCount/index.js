import React, { Component } from "react";
import { ProductConsumer } from "Components/Context";
import { Count } from "../styles";

export default class CartCount extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cart } = value;

          return <Count>{cart.length}</Count>;
        }}
      </ProductConsumer>
    );
  }
}