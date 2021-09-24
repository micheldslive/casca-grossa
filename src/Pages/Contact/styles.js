import styled from "styled-components";
import RowCol from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Row = styled(RowCol)`
margin: 0;
`;

export const Column = styled(Col)`
  padding: 0;
  
  ${(props) =>
    props.form &&
    `
    box-shadow: 0px 0px 20px -4px rgb(0 0 0 / 63%);
    text-align: center;
    padding: 30px;
    `}
`;

export const Contact = styled.div`
  padding: 5em 0;
`;

export const Container = styled.section`
  max-width: 1000px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Link = styled.a`
  color: black;

  &:hover {
    opacity: 0.8;
  }
`;

export const Paragraph = styled.p``;

export const Form = styled.form``;

export const Input = styled.input`
  border: 1px solid #b2b2b2;
  padding: 10px 15px;
  margin: 0 0 15px;
  width: calc(100% - 40px);
`;
export const Textarea = styled.textarea`
  border: 1px solid #b2b2b2;
  padding: 10px 15px;
  margin: 0 0 15px;
  width: calc(100% - 40px);
`;

export const Send = styled.button`
  padding: 10px 15px;
  display: block;
  background-color: var(--yellow);
  color: black;
  cursor: pointer;
  margin: 10px 5px 0;

  &:hover {
    opacity: 0.8;
  }
`;
