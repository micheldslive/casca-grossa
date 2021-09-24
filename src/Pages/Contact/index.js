import React, { Component } from "react";
import { Helmet } from "react-helmet";

import {
  Contact,
  Container,
  Row,
  Column,
  Title,
  Link,
  Paragraph,
  Form,
  Input,
  Textarea,
  Send,
} from "./styles";

export default class ContactPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Contato</title>
          <meta name="description" content="Contact Page." />
        </Helmet>
        <Contact>
          <Container>
            <Row>
              <Column md sm>
                <Title>ENTRE EM CONTATO</Title>
                <Paragraph>
                  Preencha o formulário ao lado que<br />
                  entraremos em contato com você.
                </Paragraph>
                <Paragraph>
                  <Link href="tel:+081995593520">(81) 9 9559-3520</Link>
                </Paragraph>
                <Paragraph>
                  <Link href="mailto:micheldslive@gmail.com">
                    micheldslive@gmail.com
                  </Link>
                </Paragraph>
              </Column>
              <Column md sm form="true">
                <Form>
                  <Row>
                    <Column lg={6}>
                      <Input type="text" placeholder="Nome"></Input>
                    </Column>
                    <Column lg={6}>
                      <Input type="text" placeholder="Email"></Input>
                    </Column>
                    <Column lg={6}>
                      <Input type="text" placeholder="Telefone"></Input>
                    </Column>
                    <Column lg={6}>
                      <Input type="text" placeholder="Assunto"></Input>
                    </Column>
                    <Column lg={12}>
                      <Textarea type="text" placeholder="Mensagem"></Textarea>
                    </Column>
                    <Send>Enviar</Send>
                  </Row>
                </Form>
              </Column>
            </Row>
          </Container>
        </Contact>
      </>
    );
  }
}
