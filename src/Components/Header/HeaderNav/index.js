import React, { useEffect, useState, Component } from "react";
import { NavLink } from "react-router-dom";
import CartCount from "./HeaderCartCount";
import {
  HeaderNavigation,
  Section,
  Navigation,
  UnList,
  List,
  Image,
  StyledMenu,
  StyledBurger,
  Bullets,
  Logo,
  Container,
  SearchContainer,
  SearchInput,
  SearchButton,
  Cart,
  Wishlist,
  Entrar,
  Icon,
  LinkHover,
  LinkText,
} from "./styles";


const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <Bullets />
      <Bullets />
      <Bullets />
    </StyledBurger>
  );
};

class Search extends Component{
  state = {
      userInput: ''
  }

  getUserInput = event => {
      this.setState({
          userInput: event.target.value
      })
  }

  render(){
      return (
        <SearchContainer>
          <SearchInput type="text" placeholder="Pesquise aqui" onChange={this.getUserInput} />
          <SearchButton to={`/search/${this.state.userInput}`} style={{ textDecoration: "none" }}>
            PROCURAR
            </SearchButton>
        </SearchContainer>
      )
  }
}

export const HeaderNav = ({ sticky }) => {

  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    onscroll = () => {
      setScroll(window.scrollY > 50);
    };
  }, []);

  const links = [
    {
      name: "Produtos",
      to: "/",
    },
    {
      name: "Quem Somos",
      to: "/about",
    },
    {
      name: "Contato",
      to: "/contact",
    },
  ];

  return (
    <HeaderNavigation sticky={scroll ? { sticky } : ""}>
      <Section sticky={scroll ? { sticky } : ""}>
        <NavLink to="/">
          <Image src={Logo} alt="Casca Grossa Logo" />
        </NavLink>
        <Search />
        <Navigation>
          <UnList>
            {links.map((go) => (
              <List key={go.name}>
                <NavLink exact to={go.to} activeClassName="active">
                  {go.name}
                </NavLink>
              </List>
            ))}
          </UnList>
        </Navigation>
        <Container>
          <LinkHover to="/login"><Icon src={Entrar}></Icon> <LinkText>Entrar</LinkText></LinkHover>
        </Container>
        <Container>
          <LinkHover to="/wishlist"><Icon src={Wishlist}></Icon></LinkHover>
          <LinkHover to="/cart" position="true"><Icon src={Cart}></Icon><CartCount/></LinkHover>
        </Container>
        <Container hide="true">
          <Burger open={open} setOpen={setOpen} />
        </Container>
      </Section>
      <StyledMenu open={open} setOpen={setOpen}>
        <UnList>
          {links.map((go) => (
            <List key={go.name}>
              <NavLink exact to={go.to} activeClassName="active" open={open} onClick={() => setOpen(!open)}>
                {go.name}
              </NavLink>
            </List>
          ))}
        </UnList>
      </StyledMenu>
    </HeaderNavigation>
  );
};
