import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 59.5%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate(34.5%, 50%);
`;

export const SearchLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-weight: bold;
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 16px;
`;

export const SearchSpan = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-size: 12px;
  color: ${(props) => props.theme["base-span"]};
  transform: translateY(-20px);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: 0.1px solid #142638;
  color: ${(props) => props.theme["base-label"]};
  border-radius: 5px;
  background-color: ${(props) => props.theme["base-input"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    border: 0.1px solid ${(props) => props.theme["blue"]};
    outline: none;
  }
`;
