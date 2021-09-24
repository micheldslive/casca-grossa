import React, { Component } from "react";
import { Header } from "./HeaderNav/styles";
import HeaderInfo from "./HeaderInfo";
import { HeaderNav } from "./HeaderNav";

export default class HeaderComp extends Component {
  render() {
    return (
      <Header>
        <HeaderInfo />
        <HeaderNav />
      </Header>
    );
  }
}
