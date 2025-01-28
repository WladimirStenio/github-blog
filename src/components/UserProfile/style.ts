import styled from "styled-components";

export const ProfileWrapper = styled.div`
  width: 65%;
  max-width: 910px;
  height: 30vh;
  background-color: ${(props) => props.theme["base-profile"]};
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -80px;

  position: relative;
  z-index: 10;
`;

export const ProfilePicture = styled.div`
  width: 16%;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 8px;
  top: 15%;
  left: 5%;
  position: absolute;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const ProfileInfo = styled.div`
  width: 75%;
  height: 100%;
  top: 20%;
  left: 25%;
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

export const IconWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
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
