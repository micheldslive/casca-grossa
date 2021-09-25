import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export { Row };

export const Column = styled(Col)`
  padding: 0;
`;

export const Cart = styled.div`
  background: var(--gray);
  padding: 4em 0;
`;

export const Container = styled.section``;

export const Products = styled.div`
  padding: 10px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  text-align: center;

  @media (max-width: 700px) {
    ${(props) =>
      props.width &&
      `
    width: initial;
    margin: 0 auto;
    `}
  }
`;

export const TableHeader = styled.thead`
  @media (max-width: 700px) {
    display: none;
  }
`;

export const TableBody = styled.tbody`
  border-top: 1px solid var(--gray3);
  @media (max-width: 700px) {
    border-top: 3px solid var(--gray3);
  }
`;

export const TableRow = styled.tr`
  @media (max-width: 700px) {
    display: block;
    margin-bottom: 0.625em;
  }
`;

export const TableCol = styled.td`
  padding: 0.625em;
  border-bottom: 1px solid #ddd;

  @media (max-width: 700px) {
    display: ${(props) => (props.hide ? "none" : "block")};
    font-size: ${(props) => (props.big ? "24px" : "0.8em")};
    text-align: right;

    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
    }
  }
`;

export const TableHead = styled.th``;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.img`
  max-width: 120px;
  margin-right: 10px;

  @media (max-width: 399px) {
    max-width: 90px;
  }
`;

export const ProductTitle = styled.h5`
  text-align: initial;
`;

export const Link = styled.span`
  font-size: 12px;
  cursor: pointer;

  ${(props) =>
    props.count &&
    `
    color: red;
    font-size: 18px;
    font-weight: bold;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

export const CountContainer = styled.div`
  width: 90px;
  margin: 0 auto;

  @media (max-width: 700px) {
    margin: 0 0 0 auto;
    text-align: center;
  }
`;
export const CountBox = styled.div`
  display: grid;
  grid-template-columns: 12px 45px 12px;
  border: 2px solid rgb(227, 227, 227);
  border-radius: 0.5rem;
  padding: 0px 8px;
  -webkit-box-align: center;
  align-items: center;
  opacity: 1;
  text-align: center;
  font-size: 16px;
`;

export const Count = styled.span``;

export const Checkout = styled.div`
  padding: 35px;
  background: white;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
`;

export const BigText = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

export const CheckoutTitle = styled.h5``;

export const Frete = styled.input`
  padding: 10px 10px 10px 0;
  width: 100%;
  background: var(--gray);

  @media (max-width: 700px) {
    width: initial;
    padding: 10px;
  }
`;

export const Finish = styled.button`
  margin-top: 40px;
  display: block;
  width: 100%;
  background: var(--yellow);
  color: black;
  padding: 10px 0;
  border-radius: 0;
  font-weight: bold;
  transition: all 0.2s linear;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.8;
  }
`;
