import React from "react";
import { Helmet } from "react-helmet";
import { ProductConsumer } from "Components/Context";
import Product from "Components/Products/Card";
import { Container, Title, Desc, Header, Count } from "./styles";
import Row from "react-bootstrap/Row";

export default function Search({ match }) {
  const search = match.params.id;

  return (
    <React.Fragment>
      <Helmet>
        <title>Busca</title>
        <meta name="description" content="Search Page." />
      </Helmet>
      <Container>
        <ProductConsumer>
          {(value) => {
            var values = value.products.filter((product) =>
              product.name.includes(search)
            );

            if (values.length !== 0) {
              return (
                <>
                  <Header>
                    <Count>
                      <Count>{values.length}</Count> produtos encontrados.
                    </Count>
                  </Header>
                  <Row>
                    {values.map((product) => {
                      return <Product key={product.id} product={product} />;
                    })}
                    ;
                  </Row>
                </>
              );
            } else {
              return (
                <>
                  <Row>
                    <Title>RESULTADO DA PESQUISA</Title>
                    <Desc>
                      Sua busca por <strong>"{search}"</strong> retornou 0
                      resultados.
                    </Desc>
                  </Row>
                </>
              );
            }
          }}
        </ProductConsumer>
      </Container>
    </React.Fragment>
  );
}
