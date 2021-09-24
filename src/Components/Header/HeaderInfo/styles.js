import styled from "styled-components";
import truck from "./images/delivery-truck.svg";
import bcode from "./images/bar-code.svg";
import card from "./images/credit-card.svg";

export { truck };
export { bcode };
export { card };

export const HeaderTop = styled.div`
  background-color: black;
  color: white;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  height: 50px;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 23px;
  height: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Text = styled.span`
  padding-right: 20px;
  font-size: 12px;
  font-weight: 400;

  @media (max-width: 991px) {
    display: ${(props) => (props.display ? "" : "none")};
  }
`;
