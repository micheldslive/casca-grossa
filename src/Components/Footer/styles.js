import styled from "styled-components";
import GamaLogo from "Assets/Images/gama-logo.png";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export { GamaLogo };

export const Footer = styled.footer``;

export const FooterMain = styled.div`
  background-color: black;
  color: white;
  padding: 5em 0;
`;

export const FooterCopy = styled.div``;

export const Container = styled.section`
  height: ${(props) => (props.flex ? "70px" : "")};
  display: ${(props) => (props.flex ? "flex" : "")};
  justify-content: ${(props) => (props.flex ? "space-between" : "")};
  align-items: ${(props) => (props.flex ? "center" : "")};
`;

export const RowContent = styled(Row)`
  margin: 0;
`;

export const Collumn = styled(Col)`
  padding: 0;

  @media (max-width: 991px) {
    max-width: 300px;
    margin: 0 auto;
  }
`;

export const Copy = styled.span``;

export const Gama = styled.img`
  width: 37px;
  height: 35px;
`;

export const LinkHref = styled.a`
  color: white;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const LinkTo = styled(Link)`
  color: white;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export const Title = styled.h4`
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 15px;

  &::after {
    content: "";
    position: absolute;
    background-color: white;
    width: 30%;
    height: 4px;
    bottom: 0;
    left: 0;
  }
`;

export const Paragraph = styled.p``;

export const Block = styled.span`
  display: block;
`;

export const Icon = styled.i`
  font-family: "Font Awesome 5 Brands";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;

  &:hover {
    opacity: 0.8;
  }

  &::before {
    content: "${(props) => (props.facebook ? "\f09a" : "\f16d")}";
    font-size: 25px;
    margin-right: 10px;
  }
`;

export const Email = styled.input`
  display: block;
  padding: 10px 15px;
  border-radius: 0;
  font-weight: bold;
  width: 220px;
`;

export const EmailSend = styled.button`
  display: block;
  background-color: var(--yellow);
  color: black;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px 15px;
  border-radius: 0;
  font-weight: bold;
  width: 220px;

  &:hover {
    opacity: 0.8;
  }
`;
