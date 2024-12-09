import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#15803d, #dcfce7);
  align-items: center;
  
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <NavBar />

      <Outlet />
    </StyledAppLayout>
  );
};

export default AppLayout;
