import React, { Component } from "react";
import {
  HeaderTop,
  Container,
  ItemContainer,
  Icon,
  Text,
  truck,
  bcode,
  card,
} from "./styles";

export default class HeaderInfo extends Component {
  state = {
    Itens: [
      { itemid: 1, icon: truck, text: "FRETE GRÁTIS ACIMA DE R$499,00" },
      { itemid: 2, icon: card, text: "ATÉ 10X SEM JUROS NO CARTÃO" },
      { itemid: 3, icon: bcode, text: "5% DE DESCONTO NO BOLETO" },
    ],
  };

  handleClick = (event) => {
    this.setState({ clicked: Number(event.target.dataset.id) });
  };

  render() {
    const { clicked, Itens } = this.state;
    return (
      <HeaderTop>
        <Container>
          {Itens.map(({ itemid, icon, text }) => (
            <ItemContainer key={itemid} data-id={itemid}>
              <Icon src={icon} data-id={itemid} onClick={this.handleClick} />
              <Text display={clicked === itemid ? "on" : ""}>{text}</Text>
            </ItemContainer>
          ))}
        </Container>
      </HeaderTop>
    );
  }
}
