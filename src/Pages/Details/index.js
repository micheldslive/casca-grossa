import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { ProductConsumer } from "Components/Context";
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
                
              const { id, imagens, name, old, price, desc, inCart } = value.detailProduct;
              const old_price = old ? old : "";
              const imagem = imagens ? imagens[0].url : '';

              return (
                <Card id={id}>
                  <Helmet>
                    <title>{name}</title>
                    <meta name="description" content={name} />
                  </Helmet>
                  <ProductImage>
                    <Display>
                      <Showcase>
                        <Image src={src ? src : imagem} alt={name} />
                      </Showcase>
                    </Display>
                    <ImageSelect>
                      {imagens?.length > 1 ? imagens.map(({url}, index) => (
                            <Link key={index}>
                              <Image shadow src={url} alt={name} onClick={() => this.onChange(url)}/>
                            </Link>
                          )) : ""}
                    </ImageSelect>
                  </ProductImage>
                  <ProductContent>
                    <Title>{name}</Title>
                    <Prices>
                      <OldPrice>{old_price ? `de ` : ''}
                          <span>
                          <NumberFormat value={old_price} displayType={"text"} decimalSeparator="," prefix={"R$ "}/>
                        </span> por
                      </OldPrice>
                      <NewPrice>
                        <span>
                          <NumberFormat value={price} displayType={"text"} decimalSeparator="," prefix={"R$ "}/>
                        </span>
                      </NewPrice>
                    </Prices>
                    <ProductDetails>{desc}</ProductDetails>
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