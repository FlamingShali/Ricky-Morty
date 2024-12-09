import styled from "styled-components";
import heroImage from "./../../public/images/heroImage.jpg";

const StyledHeroImage = styled.img`
  width: 100%;
  height: 100%;
`;

const HeroImage = function () {
  return <StyledHeroImage src={heroImage} />;
};

const HeroSection = () => {
  return (
    <div>
      <HeroImage />
    </div>
  );
};

export default HeroSection;
