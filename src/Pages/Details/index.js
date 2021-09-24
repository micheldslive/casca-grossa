import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { ProductConsumer } from "../../Components/Context";
import NumberFormat from "react-number-format";
import {
  Product,
  Container,
  Card,
  ProductImage,
  Display,
  Showcase,
  Image,
  ImageSelect,
  ProductContent,
  Title,
  Prices,
  OldPrice,
  NewPrice,
  ProductDetails,
  Purchase,
  ButtonCart,
  Link,
} from "./styles";

export default class Details extends Component {
  state = {
    src: "",
  };

  onChange = (event) => {
    this.setState({
      src: event,
    });
  };

  render() {
    const src = this.state.src;

    return (
      <Product>
        <Container>
          <ProductConsumer>
            {(value) => {
                
              const { id, img, name, old, price, Desc, inCart } = value.detailProduct;

              return (
                <Card id={id}>
                  <Helmet>
                    <title>{name}</title>
                    <meta name="description" content={name} />
                  </Helmet>
                  <ProductImage>
                    <Display>
                      <Showcase>
                        <Image src={src ? src : img[0]} alt={name} />
                      </Showcase>
                    </Display>
                    <ImageSelect>
                      {img.length > 1 ? img.map((img, index) => (
                            <Link key={index}>
                              <Image shadow src={img} alt={name} onClick={() => this.onChange(img)}/>
                            </Link>
                          )) : ""}
                    </ImageSelect>
                  </ProductImage>
                  <ProductContent>
                    <Title>{name}</Title>
                    <Prices>
                      <OldPrice> de 
                          <span>
                          <NumberFormat value={old} displayType={"text"} decimalSeparator="," prefix={"R$ "}/>
                        </span> por
                      </OldPrice>
                      <NewPrice>
                        <span>
                          <NumberFormat value={price} displayType={"text"} decimalSeparator="," prefix={"R$ "}/>
                        </span>
                      </NewPrice>
                    </Prices>
                    <ProductDetails>{Desc}</ProductDetails>
                    <hr/>
                    <Purchase>
                      <ButtonCart disabled={inCart ? true : false} onClick={() => {
                          value.addToCart(id);
                        }}>
                        {inCart ? (
                          <span><i className="fas fa-check"></i> Produto Adicionado</span>
                        ) : (
                          <span><i className="fas fa-cart-plus"></i> Adicionar ao Carrinho</span>
                        )}
                      </ButtonCart>
                    </Purchase>
                  </ProductContent>
                </Card>
              );
            }}
          </ProductConsumer>
        </Container>
      </Product>
    );
  }
}