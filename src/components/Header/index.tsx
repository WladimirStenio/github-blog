import { HeaderContainer, LeftImage, LogoImage, RightImage } from "./style";
import leftImage from "../../assets/effect-left.svg";
import rightImage from "../../assets/effect-right.svg";
import projectLogo from "../../assets/github-logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <LeftImage src={leftImage} alt="Left Image" />
      <LogoImage src={projectLogo} alt="Right Image" />
      <RightImage src={rightImage} alt="Right Image" />
    </HeaderContainer>
  );
};

export default Header;
