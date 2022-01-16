import React, { Component } from "react";
import {
  Footer,
  FooterMain,
  FooterCopy,
  Container,
  Copy,
  Gama,
  GamaLogo,
  LinkHref,
  Title,
  Paragraph,
  LinkTo,
  RowContent,
  Collumn,
  Block,
  Icon,
  Email,
  EmailSend,
} from "./styles";

export default class Baseboard extends Component {
  render() {
    return (
      <Footer>
        <FooterMain>
          <Container>
            <RowContent>
              <Collumn lg={3} sm={6}>
                <Title>LINKS</Title>
                <Paragraph><LinkTo to="/">Produtos</LinkTo></Paragraph>
                <Paragraph><LinkTo to="/about">Quem Somos</LinkTo></Paragraph>
                <Paragraph><LinkTo to="/contact">Contato</LinkTo></Paragraph>
              </Collumn>
              <Collumn lg={3} sm={6}>
                <Title>ATENDIMENTO</Title>
                <Paragraph><LinkHref href="https://api.whatsapp.com/send?phone=+558195593520">(81) 9 9559-3520</LinkHref></Paragraph>
                <Paragraph><LinkHref href="mailto:micheldslive@gmail.com">micheldslive@gmail.com</LinkHref></Paragraph>
                <Paragraph>Segunda à sexta: <Block>09H às 18H</Block></Paragraph>
              </Collumn>
              <Collumn lg={3} sm={6}>
                <Title>REDES SOCIAIS</Title>
                <Paragraph>Siga-nos nas redes sociais e fique por dentro de todas as novidades.</Paragraph>
                <Paragraph>
                  <LinkHref href="https://facebook.com/micheldslive" target="_blank">
                    <Icon facebook />
                  </LinkHref>
                  <LinkHref href="https://instagram.com/micheldslive" target="_blank">
                    <Icon />
                  </LinkHref>
                </Paragraph>
              </Collumn>
              <Collumn lg={3} sm={6}>
                <Title>NEWSLETTER</Title>
                <Paragraph>Assine a nossa newsletter e ganhe 5% de desconto na sua primeira compra.</Paragraph>
                <Paragraph>
                  <Email type="text" placeholder="Digite seu email..." />
                  <EmailSend>RECEBER DESCONTO</EmailSend>
                </Paragraph>
              </Collumn>
            </RowContent>
          </Container>
        </FooterMain>
        <FooterCopy>
          <Container flex>
            <Copy>2021 - Casca Grossa Store, All right reserveds.</Copy>
            <LinkHref href="https://www.gama.academy/" target="_blank">
              <Gama src={GamaLogo} title="Gama Academy - Desafio#01 - Casca Grossa"/>
            </LinkHref>
          </Container>
        </FooterCopy>
      </Footer>
    );
  }
}
