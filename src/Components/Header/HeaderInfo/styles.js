import styled from "styled-components";
import truck from "Assets/Images/delivery-truck.svg";
import bcode from "Assets/Images/bar-code.svg";
import card from "Assets/Images/credit-card.svg";

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
