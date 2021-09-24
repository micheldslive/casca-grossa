import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./images/casca-grossa-logo.svg";
import Cart from "./images/cart.svg";
import Entrar from "./images/user.svg";
import Wishlist from "./images/heart.svg";

export { Logo, Cart, Wishlist, Entrar };

export const Header = styled.header`
  height: 152px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 1181px) {
    display: ${(props) => (props.hide ? "none" : "")};
  }
`;

export const StyledMenu = styled.nav`
  display: none;

  @media (max-width: 1180px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100vh;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: transform 0.3s ease-in-out;

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: #0d0c1d;
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: #343078;
      }
    }
  }
`;

export const StyledBurger = styled.button`
  @media (max-width: 1180px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    span {
      width: 2rem;
      height: 0.25rem;
      background: ${({ open }) => (open ? "white" : "black")};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;
export const Bullets = styled.span``;

export const HeaderNavigation = styled.div`
  position: ${(props) => (props.sticky ? "fixed" : "")};
  border-bottom: ${(props) => (props.sticky ? "solid 1px #eee" : "")};
  top: 0;
  right: 0;
  left: 0;
  z-index: 900;
  transition: 0.3s;
  background-color: white;
  transition: 0.3s all;
`;
export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.sticky ? "90px" : "102px")};
  transition: 0.3s ease-in-out;
`;

export const Navigation = styled.nav`
  @media (max-width: 1180px) {
    display: none;
  }
`;

export const UnList = styled.ul`
  list-style: none;

  @media (max-width: 1180px) {
    vertical-align: middle;
    margin: 0 3px;
    padding: 12px;
    font-size: 15px;
    text-decoration: none;
    white-space: normal;
    color: black;
    transition: 0.3s;
  }
`;

export const List = styled.li`
  @media (max-width: 1180px) {
    a {
      margin: 0 3px;
      padding: 6px 12px;
      font-size: 25px;
      line-height: 50px;
      color: white;
      transition: 0.3s;
    }

    .active,
    a:hover {
      background-color: white;
      color: black;
      border-radius: 5px;
    }
  }

  @media (min-width: 1181px) {
    float: left;

    a {
      margin: 12px;
      padding-bottom: 5px;
      font-weight: 600;
      text-transform: uppercase;
      white-space: normal;
      color: rgba(0, 0, 0, 0.9);
      transition: 0.3s;
    }

    .active,
    a:hover {
      text-decoration: none;
      margin-bottom: -3px;
      border-bottom: 3px solid;
    }
  }
`;

export const Image = styled.img`
  height: 57px;

  @media (max-width: 499px) {
    height: 50px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  height: 47px;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  margin: -1px;
  width: 200px;
  border: 1px solid black;
  padding: 0 15px;
  height: inherit;
`;
export const SearchButton = styled(Link)`
  background-color: black;
  color: white;
  cursor: pointer;
  border: 1px solid black;
  padding: 0 15px;
  height: inherit;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
    color: white;
  }
`;

export const Icon = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
`;

export const LinkText = styled.span`
  @media (max-width: 399px) {
    display: none;
  }
`;

export const LinkHover = styled(NavLink)`
  color: black;
  position: ${(props) => (props.position ? "relative" : "")};
  &:hover {
    color: black;
    opacity: 0.8;
  }
`;

export const Count = styled.span`
  position: absolute;
  right: 0;
  bottom: 15px;
  width: 25px;
  height: 25px;
  background: var(--gray);
  border-radius: 100%;
  text-align: center;
`;
