import styled from "styled-components";

export const PostWrapper = styled.div`
  width: 65%;
  max-width: 910px;
  height: 30vh;
  background-color: ${(props) => props.theme["base-profile"]};
  margin: 0 auto;
  margin-top: -80px;

  position: relative;
  z-index: 10;
`;

export const PostInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;

  position: absolute;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.4rem;
  margin-top: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-bottom: 1rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const IconItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;

export const IconText = styled.span`
  font-size: 0.9rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["blue"]};
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["blue"]};
  background: none;
  border: none;
  text-decoration: none;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const LinkImage = styled.img`
  width: 16px;
  height: 16px;
`;
