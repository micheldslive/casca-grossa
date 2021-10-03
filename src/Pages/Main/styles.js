import styled from "styled-components";

export const Container = styled.section``;

export const ProductHeader = styled.div`
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray);
  flex-wrap: wrap;
`;

export const ProductCount = styled.div`
  margin-right: 15px;
`;

export const CountSpan = styled.span`
  font-weight: bold;
`;

export const ProductView = styled.div`
  display: flex;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const TreeView = styled.a`
  padding-right: 10px;

  & span::after,
  & span::before {
    background: ${({ view }) => (view === 4 ? "black" : "")};
  }
`;

export const FourView = styled.a`
  & span::after,
  & span::before {
    background: ${({ view }) => (view === 3 ? "black" : "")};
  }
`;

export const ViewSpan = styled.span`
  display: block;
  float: left;
  cursor: pointer;
  transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -webkit-transition: opacity 0.25s ease-in-out;

  &::after,
  &::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background: var(--gray);
    display: block;
    margin: 1px;
  }
`;
