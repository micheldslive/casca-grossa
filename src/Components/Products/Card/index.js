import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "Components/Context";
import NumberFormat from 'react-number-format';

import {
  Container,
  Image,
  ItemDescription,
  Category,
  DivTitle,
  Title,
  Prices,
  OldPrice,
  NewPrice,
  Condition,
  Button,
  Column,
  ImageClick,
} from "./styles";

export default class Product extends React.Component {
  render() {
    const { id, name, img, category, old, price, condition, inCart, } = this.props.product;
    const view = this.props.view;

    return (
      <Column md={view} sm={6}>
        <ProductConsumer>
          {(value) => (
            <Container onClick={() => {
                value.handleDetail(id);
              }}>
              <ImageClick to="/details">
                <Image src={img[0]} alt={name} />
              </ImageClick>
              <ItemDescription>
                <Category>{category}</Category>
                <DivTitle>
                  <Title>{name}</Title>
                </DivTitle>
              </ItemDescription>
              <Prices>
                <OldPrice>
                  <NumberFormat value={old} displayType={'text'} decimalSeparator="," prefix={'R$ '} />
                </OldPrice>
                <NewPrice>
                  <NumberFormat value={price} displayType={'text'} decimalSeparator="," prefix={'R$ '} />
                  </NewPrice>
                <Condition>{condition}</Condition>
              </Prices>
                <Button as={Link} to="/details" background="background"><i className="fas fa-search"></i> VER MAIS</Button>
              <Button disabled={inCart ? true : false} onClick={() => {
                  value.addToCart(id);
                }}>
                {inCart ? (
                  <span><i className="fas fa-check"></i> ADICIONADO</span>
                ) : (
                  <span><i className="fas fa-cart-plus"></i> ADICIONAR</span>
                )}
              </Button>
            </Container>
          )}
        </ProductConsumer>
      </Column>
    );
  }
}
