import styled from "styled-components";

export const Container = styled.section``;

export const Title = styled.h4`
  width: 100%;
  text-align: center;
`;

export const Desc = styled.div`
  width: 100%;
  text-align: center;
`;

export const Header = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray);
  align-items: center;
`;

export const Count = styled.span`
  & span {
    font-weight: bold;
  }
`;
