import { Link } from "react-router-dom";
import styled from "styled-components";
import Col from "react-bootstrap/Col";

export const Container = styled.div`
  text-align: center;
  margin: 20px;

  &:hover {
    -webkit-box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.63);
    box-shadow: 0px 0px 20px -4px rgba(0, 0, 0, 0.63);
    cursor: pointer;
  }
`;

export const Column = styled(Col)`
  padding: 0;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ItemDescription = styled.div``;

export const Category = styled.span``;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  padding-bottom: 30px;
`;

export const Title = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
`;

export const Prices = styled.div`
  padding-bottom: 30px;
`;

export const OldPrice = styled.div`
  text-decoration: line-through;
  min-height: 24px;
`;

export const NewPrice = styled.div`
  font-size: 30px;
  font-weight: bold;
  min-height: 40px;
`;

export const Condition = styled.div`
  min-height: 24px;
`;

export const ImageClick = styled(Link)``;

export const Button = styled.button`
  display: block;
  width: 100%;
  background: ${(props) => (props.background ? "var(--yellow)" : "black")};
  color: ${(props) => (props.background ? "black" : "white")};
  padding: 10px 0;
  border-radius: 0;
  font-weight: bold;
  transition: all 0.2s linear;
  margin-bottom: ${(props) => (props.background ? "5px" : "0")};

  &:hover {
    color: ${(props) => (props.background ? "black" : "white")};
    opacity: 0.8;
  }
`;
