import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ProductCart from "./ProductCart";
import NumberFormat from "react-number-format";
import { ProductConsumer } from "Components/Context";
import {
  Cart,
  Container,
  Row,
  Column,
  Products,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCol,
  Checkout,
  BigText,
  CheckoutTitle,
  Frete,
  Finish,
} from "./styles";

export default class Details extends Component {
  render() {
    return (
      <Cart>
        <Helmet>
          <title>Carrinho</title>
          <meta name="description" content="Cart of the Page." />
        </Helmet>
        <Container>
          <Row>
            <ProductConsumer>
              {(value) => {
                const { cart, cartSubTotal } = value;

                if (cart.length > 0) {
                  return (
                    <>
                      <Column lg={8} sm={12}>
                        <Products>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead colSpan={3}>Item</TableHead>
                                <TableHead>Preço</TableHead>
                                <TableHead>Quantidade</TableHead>
                                <TableHead>Total</TableHead>
                              </TableRow>
                            </TableHeader>
                            <ProductCart value={value} />
                          </Table>
                        </Products>
                      </Column>
                      <Column lg={4} sm={12}>
                        <Checkout>
                          <CheckoutTitle>Resumo do Pedido</CheckoutTitle>
                          <Table>
                            <TableBody>
                              <TableRow>
                                <TableCol hide="true">
                                  <BigText>Subtotal:</BigText>
                                </TableCol>
                                <TableCol data-label="Total" big="true">
                                  <BigText>
                                    <NumberFormat value={cartSubTotal} displayType={"text"} decimalSeparator="," prefix={"R$ "}/>
                                  </BigText>
                                </TableCol>
                              </TableRow>
                              <TableRow>
                                <TableCol>Calcular Frete</TableCol>
                                <TableCol>
                                  <Frete type="text" />
                                </TableCol>
                              </TableRow>
                              <TableRow>
                                <TableCol hide="true">
                                  <BigText>Frete</BigText>
                                </TableCol>
                                <TableCol data-label="Frete" big="true">
                                  <BigText>Frete Gratis</BigText>
                                </TableCol>
                              </TableRow>
                              <TableRow>
                                <TableCol hide="true">
                                  <BigText>Total:</BigText>
                                </TableCol>
                                <TableCol data-label="Total" big="true">
                                  <BigText>
                                    <NumberFormat value={cartSubTotal} displayType={"text"} decimalSeparator="," prefix={"R$ "}/>
                                  </BigText>
                                </TableCol>
                              </TableRow>
                              <TableRow>
                                <TableCol colSpan={2}>
                                  <Finish>FINALIZAR COMPRA</Finish>
                                </TableCol>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </Checkout>
                      </Column>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Column lg={12}>
                        <Table width="true">
                          <TableBody>
                            <TableRow>
                              <TableCol colSpan={6}>
                              Você não tem itens no seu carrinho de compras.<br/>
                              <Link to="/">Clique aqui</Link> para continuar a fazer compras.
                              </TableCol>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Column>
                    </>
                  );
                }
              }}
            </ProductConsumer>
          </Row>
        </Container>
      </Cart>
    );
  }
}
