import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
 
  align-items: center;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <NavBar />
      <HeroSection />
    </StyledAppLayout>
  );
};

export default AppLayout;
