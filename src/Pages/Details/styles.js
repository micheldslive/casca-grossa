import styled from "styled-components";

export const Product = styled.div`
  padding: 5rem 0;
`;

export const Container = styled.section``;

export const Card = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
`;

export const ProductImage = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Display = styled.div`
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 7%), 0 2px 10px 0 rgb(0 0 0 / 7%);
`;

export const Showcase = styled.div`
  display: flex;
  width: 100%;
  transition: all 0.5s ease;
`;

export const Image = styled.img`
  width: 100%;
  display: block;

  box-shadow: ${(props) =>
    props.shadow
      ? "0 2px 5px 0 rgb(0 0 0 / 7%), 0 2px 10px 0 rgb(0 0 0 / 7%)"
      : ""};
`;

export const ImageSelect = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ProductContent = styled.div`
  padding: 2rem 1rem;
`;

export const Title = styled.h3`
  text-transform: uppercase;

  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const Prices = styled.div``;

export const OldPrice = styled.span`
  & span {
    color: red;
  }
`;

export const NewPrice = styled.p`
  & span {
    font-weight: bold;
    font-size: 30px;
  }
`;

export const ProductDetails = styled.div``;

export const Purchase = styled.div`
  margin: 1.5rem 0;
`;

export const ButtonCart = styled.button`
  display: block;
  width: 100%;
  background: var(--yellow);
  color: black;
  padding: 10px 0;
  border-radius: 0;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.2s linear;

  &:hover {
    color: black;
    opacity: 0.8;
  }

  @media (max-width: 992px) {
    width: 250px;
    margin: 0 auto;
  }
`;
export const Link = styled.a`
  cursor: pointer;
`;
