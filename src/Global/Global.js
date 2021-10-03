import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap");

:root {
  --gray: #f5f5f5;
  --gray2: #ededed;
  --gray3: #ccc;
  --yellow: #ffc832;
  --black: #222;
  --black: #555;
}

body,
html {
  scroll-behavior: smooth;
}

body {
  font-family: "Roboto Slab", serif !important;
  font-size: 16px;
}

body::-webkit-scrollbar {
  width: 0.5em;
}

body::-webkit-scrollbar-thumb {
  background-color: black;
  outline: 1px solid black;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

* {
  padding: 0;
  margin: 0;
  border: 0;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

section {

  @media (min-width: 1280px) {
    max-width: 1250px;
    margin: 0 auto;
  }

  @media (min-width: 880px) and (max-width: 1279px) {
    margin: 0 35px;
  }

  @media (max-width: 879px) {
    margin: 0 15px;
  }
}

`;
