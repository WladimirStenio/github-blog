import styled from "styled-components";

export const PostsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  width: 62.5%;
  max-width: 1440px;
  margin: 4rem auto 0;
  padding: 1.5rem;
`;

export const PostsContainer = styled.div`
  background-color: ${(props) => props.theme["base-post"]};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: ${(props) => props.theme["base-effect"]};
  }
`;
export const PostLabel = styled.label`
  font-weight: bold;
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 16px;
`;

export const PostBody = styled.p`
  color: ${(props) => props.theme["base-text"]};
  margin-top: 1rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: auto;
  max-height: 6rem;
`;

export const Highlighted = styled.span`
  color: ${(props) => props.theme["base-highlight"]};
  font-weight: bold;
  border-radius: 2px;
  padding: 0 2px;
`;
