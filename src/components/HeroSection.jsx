import heroImage from "./../../public/images/heroImage.jpg";

const HeroImage = function () {
  return <img src={heroImage} />;
};

const HeroSection = () => {
  return (
    <div>
      <HeroImage />
      Coś
    </div>
  );
};

export default HeroSection;
