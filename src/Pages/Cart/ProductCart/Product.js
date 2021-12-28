import React from "react";
import NumberFormat from "react-number-format";
import {
  TableBody,
  TableRow,
  TableCol,
  Product,
  ProductImage,
  ProductTitle,
  Link,
  CountBox,
  CountContainer,
  Count,
} from "../styles";

export default function cartProduct({ item, value }) {
  const { id, name, imagens, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <TableBody>
      <TableRow>
        <TableCol colSpan={3}>
          <Product>
            <ProductImage src={imagens[0]?.url} />
            <ProductTitle>{name}</ProductTitle>
          </Product>
        </TableCol>
        <TableCol data-label="Preço">
          <NumberFormat value={price} displayType={'text'} decimalSeparator="," prefix={'R$ '} />
        </TableCol>
        <TableCol data-label="Quantidade">
          <CountContainer>
            <CountBox>
              <Link count="true" onClick={() => decrement(id)}>-</Link>
              <Count>{count}</Count>
              <Link count="true" onClick={() => increment(id)}>+</Link>
            </CountBox>
            <Link onClick={() => removeItem(id)}>
            <i className="fas fa-trash"> remover</i>
          </Link>
          </CountContainer>
        </TableCol>
        <TableCol data-label="Total">
          <NumberFormat value={total} displayType={'text'} decimalSeparator="," prefix={'R$ '} />
        </TableCol>
      </TableRow>
    </TableBody>
  );
}
