import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Products from "Components/Products";
import {
  Container,
  ProductHeader,
  ProductCount,
  ProductView,
  CountSpan,
  TreeView,
  FourView,
  ViewSpan,
} from "./styles";

const Main = () => {
  const [view, setView] = useState(4);

  const treeClick = () => {
    setView(4);
  };

  const fourClick = () => {
    setView(3);
  };

  return (
    <React.Fragment>
      <Container>
        <ProductHeader>
          <ProductCount>
            <CountSpan>12</CountSpan> produtos encontrados.
          </ProductCount>
          <ProductView>
            <TreeView view={view} onClick={treeClick}>
              <ViewSpan />
              <ViewSpan />
              <ViewSpan />
            </TreeView>
            <FourView view={view} onClick={fourClick}>
              <ViewSpan />
              <ViewSpan />
              <ViewSpan />
              <ViewSpan />
            </FourView>
          </ProductView>
        </ProductHeader>
        <Row>
          <Products view={view} />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Main;
