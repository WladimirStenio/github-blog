import styled from "styled-components";

// Container principal do Header
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 296px;
  overflow: hidden;
  background-color: ${(props) => props.theme["base-effect"]};
`;

// Imagem da esquerda
export const LeftImage = styled.img`
  height: 85%;
  @media (max-width: 768px) {
    height: 60%;
  }
`;

// Imagem da direita
export const RightImage = styled.img`
  height: 85%;
  @media (max-width: 768px) {
    height: 60%;
  }
`;

// Logo centralizado
export const LogoImage = styled.img`
  height: 40%;
  position: relative;
  margin: 0 auto; // Garante que o logo fique centralizado
  transform: translateY(-35%); // Ajuste fino de posicionamento vertical
  @media (max-width: 768px) {
    height: 20%;
    transform: translateY(0); // Remove ajuste fino em telas menores
  }
`;
