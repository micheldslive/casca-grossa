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
    const { produtoid, name, imagens, categoria, old, price, condition, inCart } = this.props.product;
    const view = this.props.view;
    return (
      <Column md={view} sm={6}>
        <ProductConsumer>
          {(value) => (
            <Container onClick={() => {
                value.handleDetail(produtoid);
              }}>
              <ImageClick to="/details">
                <Image src={imagens[0]?.url} alt={name} />
              </ImageClick>
              <ItemDescription>
                <Category>{categoria?.categoria}</Category>
                <DivTitle>
                  <Title>{name}</Title>
                </DivTitle>
              </ItemDescription>
              <Prices>
                <OldPrice>
                  <NumberFormat value={old ? old : ""} displayType={'text'} decimalSeparator="," prefix={'R$ '} />
                </OldPrice>
                <NewPrice>
                  <NumberFormat value={price} displayType={'text'} decimalSeparator="," prefix={'R$ '} />
                  </NewPrice>
                <Condition>{condition}</Condition>
              </Prices>
                <Button as={Link} to="/details" background="background"><i className="fas fa-search"></i> VER MAIS</Button>
              <Button disabled={inCart ? true : false} onClick={() => {
                  value.addToCart(produtoid);
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
