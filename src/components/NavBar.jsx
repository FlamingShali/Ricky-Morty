import { Link } from "react-router";
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin: 10px;
  font-size: large;
`;

const StyledNavBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(#15803d, #dcfce7);
  width: 100%;
`;

const StyledNavLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 3rem;
`;

const StyledHeader = styled.h1`
  font-weight: bold;
`;
const Header = function () {
  return <StyledHeader>Welcome to the Ricky&Morty App</StyledHeader>;
};

const NavBar = () => {
  return (
    <StyledNavBar>
      <Header />
      <StyledNavLinks>
        <StyledLink to="/characters">Characters</StyledLink>
        <StyledLink to="/locations">Location</StyledLink>
        <StyledLink to="/epizodes">Epizode</StyledLink>
      </StyledNavLinks>
    </StyledNavBar>
  );
};

export default NavBar;
