import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import { routes, Breadcrumb, Container, Icon, Arrow, HomeIcon } from "./styles";

export default class Breadcrumbs extends Component {
  render() {
    return (
      <>
        <Breadcrumb>
          <Container>
            <Link to="/">
              <Icon src={HomeIcon}></Icon>
            </Link>
            <Arrow>{">"}</Arrow>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                {route.newpath}
              </Route>
            ))}
          </Container>
        </Breadcrumb>
      </>
    );
  }
}
