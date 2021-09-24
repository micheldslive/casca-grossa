import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainError = styled.div`
  background-color: var(--gray);
  position: relative;
  padding: 3rem 0;
`;

export const Container = styled.section``;

export const Error = styled.div`
  color: var(--black);
  font-size: 11rem;
  line-height: 11rem;
  position: relative;
  text-align: center;
  font-weight: 700;

  @media (max-width: 700px) {
    font-size: 6rem;
    line-height: 6rem;
  }
`;

export const ErrorMsg = styled.div`
  text-align: center;
  font-size: 1.6rem;
  margin: auto;
  max-width: 800px;
  color: var(--dark-blue);
  text-transform: uppercase;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: var(--yellow);

  &:hover {
    text-decoration: underline;
  }
`;
