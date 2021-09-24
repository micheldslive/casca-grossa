import styled from "styled-components";
import HomeIcon from "./img/home.svg";

export { HomeIcon };

export const Breadcrumb = styled.div`
  background: var(--gray);
  font-weight: 700;
`;

export const Container = styled.section`
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 4px;
`;

export const Arrow = styled.span`
  margin: 0 15px;
`;

export const routes = [
  {
    path: "/",
    exact: true,
    newpath: "PRODUTOS",
  },
  {
    path: "/about",
    exact: true,
    newpath: "QUEM SOMOS",
  },
  {
    path: "/contact",
    exact: true,
    newpath: "CONTATO",
  },
  {
    path: "/details",
    exact: true,
    newpath: "DETALHES DO PRODUTO",
  },
  {
    path: "/cart",
    exact: true,
    newpath: "CARRINHO DE COMPRAS",
  },
  {
    path: "/login",
    exact: true,
    newpath: "ENTRAR",
  },
  {
    path: "/search/:id",
    exact: true,
    newpath: "RESULTADO DA PESQUISA",
  },
  {
    path: "/wishlist",
    exact: true,
    newpath: "LISTA DE DESEJOS",
  },
];
