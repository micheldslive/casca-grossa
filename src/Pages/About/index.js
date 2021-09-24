import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { AboutContent, Container, Title, AboutUs, Paragraph } from "./styles";

export default class About extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Quem Somos</title>
          <meta name="description" content="About Page." />
        </Helmet>
        <AboutContent>
          <Container>
            <Title>SOBRE NÓS</Title>
            <AboutUs>
              <Paragraph>
                Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et
                quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado
                sem cochilar e fazendo pose. Manduma pindureta quium dia nois
                paga. Interagi no mé, cursus quis, vehicula ac nisi.
              </Paragraph>

              <Paragraph>
                Aenean aliquam molestie leo, vitae iaculis nisl. Quem manda na
                minha terra sou euzis! Atirei o pau no gatis, per gatis num
                morreus. Si num tem leite então bota uma pinga aí cumpadi!
              </Paragraph>

              <Paragraph>
                Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie
                leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de
                denguis. Delegadis gente finis, bibendum egestas augue arcu ut
                est. Quem num gosta di mé, boa gentis num é.
              </Paragraph>

              <Paragraph>
                Copo furadis é disculpa de bebadis, arcu quam euismod magna.
                Praesent vel viverra nisi. Mauris aliquet nunc non turpis
                scelerisque, eget. Todo mundo vê os porris que eu tomo, mas
                ninguém vê os tombis que eu levo! Admodum accumsan disputationi
                eu sit. Vide electram sadipscing et per.
              </Paragraph>

              <Paragraph>
                Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma
                pindureta. Per aumento de cachacis, eu reclamis. Viva Forevis
                aptent taciti sociosqu ad litora torquent.
              </Paragraph>

              <Paragraph>
                Interessantiss quisso pudia ce receita de bolis, mais bolis eu
                num gostis. Mais vale um bebadis conhecidiss, que um alcoolatra
                anonimis. Suco de cevadiss deixa as pessoas mais interessantis.
                Casamentiss faiz malandris se pirulitá.
              </Paragraph>

              <Paragraph>
                Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis,
                aguis e fermentis. Sapien in monti palavris qui num significa
                nadis i pareci latim. Posuere libero varius. Nullam a nisl ut
                ante blandit hendrerit. Aenean sit amet nisi. Tá deprimidis, eu
                conheço uma cachacis que pode alegrar sua vidis.
              </Paragraph>

              <Paragraph>
                Quem num gosta di mim que vai caçá sua turmis! Si u mundo tá
                muito paradis? Toma um mé que o mundo vai girarzis! A ordem dos
                tratores não altera o pão duris. Nec orci ornare consequat.
                Praesent lacinia ultrices consectetur. Sed non ipsum felis.
              </Paragraph>

              <Paragraph>
                Leite de capivaris, leite de mula manquis sem cabeça. Praesent
                malesuada urna nisi, quis volutpat erat hendrerit non. Nam
                vulputate dapibus. Nullam volutpat risus nec leo commodo, ut
                interdum diam laoreet. Sed non consequat odio. Pra lá , depois
                divoltis porris, paradis.
              </Paragraph>

              <Paragraph>
                In elementis mé pra quem é amistosis quis leo. Mé faiz elementum
                girarzis, nisi eros vermeio. Não sou faixa preta cumpadi, sou
                preto inteiris, inteiris. Vehicula non. Ut sed ex eros. Vivamus
                sit amet nibh non tellus tristique interdum.
              </Paragraph>
            </AboutUs>
          </Container>
        </AboutContent>
      </>
    );
  }
}
